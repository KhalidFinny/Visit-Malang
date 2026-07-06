import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useScrollLock } from "../../hooks/useScrollLock";
import type { PostcardModalProps, LayoutStyle } from "../types";


const POSTCARD_DESTINATIONS = [
  { slug: "mount-bromo", name: "Mount Bromo", defaultImage: "/locations/Mount_Bromo.jpg" },
  { slug: "tumpak-sewu", name: "Tumpak Sewu", defaultImage: "/locations/Tumpak_Sewu.jpg" },
  { slug: "mount-semeru", name: "Mount Semeru", defaultImage: "/bromo.jpg" },
  { slug: "pantai-3-warna", name: "Pantai 3 Warna", defaultImage: "/bromo.jpg" },
  { slug: "coban-pelangi", name: "Coban Pelangi", defaultImage: "/bromo.jpg" },
  { slug: "pulau-sempu", name: "Pulau Sempu", defaultImage: "/bromo.jpg" },
  { slug: "budug-asu", name: "Budug Asu", defaultImage: "/bromo.jpg" },
  { slug: "jatim-park-1", name: "Jatim Park 1", defaultImage: "/bromo.jpg" },
  { slug: "museum-angkut", name: "Museum Angkut", defaultImage: "/bromo.jpg" },
  { slug: "kayutangan-heritage", name: "Kayutangan Heritage", defaultImage: "/bromo.jpg" },
  { slug: "sumber-sirah", name: "Sumber Sirah", defaultImage: "/bromo.jpg" },
  { slug: "nakoa-coffee", name: "Nakoa Coffee", defaultImage: "/bromo.jpg" }
];


export default function PostcardModal({ isOpen, onClose }: PostcardModalProps) {
  const [selectedDestIndex, setSelectedDestIndex] = useState(0);
  const currentDest = POSTCARD_DESTINATIONS[selectedDestIndex];

  const [message, setMessage] = useState("Exploring the breathtaking landscapes of Malang. The views here are unforgettable.");
  const [imageSrc, setImageSrc] = useState(currentDest.defaultImage);
  const [palette, setPalette] = useState<string[]>(["#2d3748", "#4a5568", "#718096", "#a0aec0"]);
  const [downloading, setDownloading] = useState(false);
  const [layoutStyle, setLayoutStyle] = useState<LayoutStyle>("classic");
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCustomImage, setIsCustomImage] = useState(false);

  // Sync default image when destination changes if user hasn't uploaded a custom one
  useEffect(() => {
    if (!isCustomImage) {
      setImageSrc(currentDest.defaultImage);
    }
  }, [selectedDestIndex, isCustomImage]);

  // Lock background body & wheel scroll when open
  useScrollLock(isOpen);

  // Extract color palette from image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = 50;
        canvas.height = 50;
        ctx.drawImage(img, 0, 0, 50, 50);
        const imgData = ctx.getImageData(0, 0, 50, 50).data;

        // Sample coordinates to build a color palette
        const samples = [
          { x: 10, y: 10 },
          { x: 35, y: 15 },
          { x: 15, y: 35 },
          { x: 30, y: 30 }
        ];

        const colors = samples.map(pos => {
          const idx = (pos.y * 50 + pos.x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          return rgbToHex(r, g, b);
        });

        setPalette(colors);
      } catch (err) {
        console.warn("CORS block or canvas error. Falling back to default palette.", err);
        setPalette(["#2d3748", "#4a5568", "#718096", "#a0aec0"]);
      }
    };
  }, [imageSrc]);

  const rgbToHex = (r: number, g: number, b: number) => {
    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + toHex(r) + toHex(g) + toHex(b);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result as string);
          setIsCustomImage(true);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Helper: Text Wrapping
  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  // Canvas drawing for each layout style
  const generateDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setDownloading(true);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setDownloading(false);
      return;
    }

    // High res canvas size: 1200 x 800
    canvas.width = 1200;
    canvas.height = 800;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    
    img.onload = () => {
      try {
        if (layoutStyle === "classic") {
          // ── CLASSIC SPLIT POSTCARD ──
          ctx.fillStyle = "#faf8f5";
          ctx.fillRect(0, 0, 1200, 800);

          // Draw left half photo
          ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 600, 800);

          // Draw divider
          ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(600, 0);
          ctx.lineTo(600, 800);
          ctx.stroke();

          const startX = 660;

          // Header
          ctx.fillStyle = "rgba(0,0,0,0.4)";
          ctx.font = "bold 13px 'Courier New', monospace";
          ctx.fillText("POSTCARD FROM EAST JAVA", startX, 60);

          // Location name
          ctx.fillStyle = "#111111";
          ctx.font = "900 42px 'Inter', sans-serif";
          ctx.fillText(currentDest.name.toUpperCase(), startX, 130);

          // Location details
          ctx.fillStyle = "rgba(0,0,0,0.5)";
          ctx.font = "bold 12px 'Courier New', monospace";
          ctx.fillText(`LOCATION CODE: ${currentDest.slug.toUpperCase()}`, startX, 160);

          // Message
          ctx.fillStyle = "#222222";
          ctx.font = "italic 18px 'Georgia', serif";
          const lines = wrapText(ctx, `"${message}"`, 480);
          let currentY = 220;
          lines.forEach(line => {
            ctx.fillText(line, startX, currentY);
            currentY += 32;
          });

          // Palette
          const paletteY = 560;
          ctx.fillStyle = "rgba(0,0,0,0.3)";
          ctx.font = "bold 10px 'Courier New', monospace";
          ctx.fillText("CHROMATIC PALETTE", startX, paletteY - 15);

          palette.forEach((color, i) => {
            const colW = 60;
            const colH = 24;
            const colX = startX + i * 75;
            ctx.fillStyle = color;
            ctx.fillRect(colX, paletteY, colW, colH);

            ctx.fillStyle = "#666666";
            ctx.font = "bold 9px 'Courier New', monospace";
            ctx.fillText(color.toUpperCase(), colX, paletteY + colH + 15);
          });

          // Draw circular stamp badge in top-right
          drawPostmark(ctx, 1080, 100);

        } else if (layoutStyle === "polaroid") {
          // ── VINTAGE POLAROID PHOTOBOX ──
          ctx.fillStyle = "#e6e2db";
          ctx.fillRect(0, 0, 1200, 800);

          // Draw Polaroid Card Background with drop shadow
          ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
          ctx.shadowBlur = 30;
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(250, 40, 700, 720);
          ctx.shadowColor = "transparent"; // Reset shadow

          // Draw Image inside Polaroid Frame
          ctx.drawImage(img, 0, 0, img.width, img.height, 290, 80, 620, 480);

          // Draw Polaroid Caption
          ctx.fillStyle = "#1b2a4a";
          ctx.font = "italic 26px 'Georgia', serif";
          ctx.textAlign = "center";
          
          const lines = wrapText(ctx, message, 600);
          let textY = 615;
          lines.slice(0, 2).forEach(line => {
            ctx.fillText(line, 600, textY);
            textY += 36;
          });

          // Reset text alignment
          ctx.textAlign = "left";

          // Add simulated tape overlay at the top edge of card
          ctx.fillStyle = "rgba(250, 240, 215, 0.4)";
          ctx.fillRect(520, 20, 160, 45);

          // Draw postmark stamp
          drawPostmark(ctx, 880, 150);

        } else if (layoutStyle === "scrapbook") {
          // ── RETRO SCRAPBOOK STICKER COLLAGE ──
          ctx.fillStyle = "#f3f0e8";
          ctx.fillRect(0, 0, 1200, 800);

          // Draw simulated retro page lines / grids
          ctx.strokeStyle = "rgba(0,0,0,0.03)";
          ctx.lineWidth = 1;
          for (let i = 0; i < 1200; i += 40) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 800);
            ctx.stroke();
          }

          // Draw rotated photo frame in center-left
          ctx.save();
          ctx.translate(380, 380);
          ctx.rotate(-0.06); // rotate slightly left
          
          // Draw card base
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "rgba(0,0,0,0.1)";
          ctx.shadowBlur = 20;
          ctx.fillRect(-280, -280, 560, 560);
          ctx.shadowColor = "transparent";

          // Draw photo inside
          ctx.drawImage(img, 0, 0, img.width, img.height, -250, -250, 500, 420);

          // Draw title below photo in frame
          ctx.fillStyle = "#222222";
          ctx.font = "bold 20px 'Courier New', monospace";
          ctx.textAlign = "center";
          ctx.fillText(`• ${currentDest.name.toUpperCase()} •`, 0, 220);

          ctx.restore();

          // Draw message panel on the right half
          const rightX = 720;
          ctx.fillStyle = "#faf8f5";
          ctx.fillRect(rightX, 150, 400, 480);
          ctx.strokeStyle = "rgba(122, 158, 100, 0.2)";
          ctx.lineWidth = 3;
          ctx.strokeRect(rightX, 150, 400, 480);

          // Message details
          ctx.fillStyle = "#2d3748";
          ctx.font = "20px 'Courier New', monospace";
          const lines = wrapText(ctx, message, 350);
          let currentY = 220;
          lines.forEach(line => {
            ctx.fillText(line, rightX + 25, currentY);
            currentY += 34;
          });

          // Draw retro postmark stamp overlapping
          drawPostmark(ctx, rightX + 320, 190);

        } else if (layoutStyle === "swiss") {
          // ── SWISS STARK MINIMAL ──
          ctx.fillStyle = "#0c0c0c";
          ctx.fillRect(0, 0, 1200, 800);

          // Image takes up right 55%
          ctx.drawImage(img, 0, 0, img.width, img.height, 540, 0, 660, 800);

          // Left black column text layout
          const leftX = 60;
          
          // Red accent mark
          ctx.fillStyle = "#ff3b30";
          ctx.fillRect(leftX, 60, 80, 6);

          // Heading
          ctx.fillStyle = "#ffffff";
          ctx.font = "900 48px 'Inter', sans-serif";
          ctx.fillText(currentDest.name.toUpperCase(), leftX, 160);

          // Metadata label
          ctx.fillStyle = "#ff3b30";
          ctx.font = "bold 11px 'Courier New', monospace";
          ctx.fillText(`SWISS / EDITORIAL STAMP // ${currentDest.slug.toUpperCase()}`, leftX, 195);

          // Message body
          ctx.fillStyle = "rgba(255,255,255,0.7)";
          ctx.font = "16px 'Helvetica Neue', Arial, sans-serif";
          const lines = wrapText(ctx, message, 420);
          let currentY = 270;
          lines.forEach(line => {
            ctx.fillText(line, leftX, currentY);
            currentY += 30;
          });

          // Colors palette tiles in Swiss column
          const tileY = 620;
          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 10px 'Courier New', monospace";
          ctx.fillText("CHROMATIC SPEC:", leftX, tileY - 15);

          palette.forEach((color, i) => {
            const tileW = 45;
            const tileH = 45;
            const tileX = leftX + i * 55;
            ctx.fillStyle = color;
            ctx.fillRect(tileX, tileY, tileW, tileH);
          });
        }

        // Trigger file download
        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = `postcard_${layoutStyle}_${currentDest.slug}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setDownloading(false);
      } catch (err) {
        console.error("Canvas draw failed", err);
        alert("Failed to render postcard. Try uploading a local photo if default image throws a CORS safety error.");
        setDownloading(false);
      }
    };

    img.onerror = () => {
      alert("Error loading photo source.");
      setDownloading(false);
    };
  };

  const drawPostmark = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.strokeStyle = "rgba(122, 158, 100, 0.4)";
    ctx.lineWidth = 2.5;

    // Outer circle
    ctx.beginPath();
    ctx.arc(x, y, 45, 0, Math.PI * 2);
    ctx.stroke();

    // Inner circle
    ctx.beginPath();
    ctx.arc(x, y, 32, 0, Math.PI * 2);
    ctx.stroke();

    // Text details inside stamp
    ctx.fillStyle = "rgba(122, 158, 100, 0.5)";
    ctx.font = "bold 7px 'Courier New', Courier, monospace";
    ctx.textAlign = "center";
    ctx.fillText("MALANG", x, y - 5);
    ctx.fillText("PASSPORT", x, y + 5);

    // Reset alignment
    ctx.textAlign = "left";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-[#faf8f5] border border-black/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[90vh] md:h-[550px] text-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/5 hover:bg-black/15 border border-black/10 text-black flex items-center justify-center transition-all cursor-pointer"
        >
          <FontAwesomeIcon icon={faTimes} className="text-xs" />
        </button>

        {/* Left Side: Editor Controls */}
        <div data-lenis-prevent="true" className="w-full md:w-1/2 p-6 overflow-y-auto [overscroll-behavior:contain] space-y-5 border-b md:border-b-0 md:border-r border-black/[0.08] scrollbar-none flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#7a9e64]">
                Visual Souvenir
              </span>
              <h4 className="text-lg font-bold text-black uppercase tracking-tight mt-0.5">
                Postcard Maker
              </h4>
            </div>
            {/* Design Layout Selector */}
            <div>
              <label className="block text-[10px] font-bold text-black/50 uppercase tracking-wider mb-2">
                Choose Postcard Layout (Photobox Styles)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(["classic", "polaroid", "scrapbook", "swiss"] as LayoutStyle[]).map(style => (
                  <button
                    key={style}
                    onClick={() => setLayoutStyle(style)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold border uppercase tracking-wider transition-all cursor-pointer ${
                      layoutStyle === style
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black/60 border-black/10 hover:border-black/20'
                    }`}
                  >
                    {style === "classic" && "Classic Split"}
                    {style === "polaroid" && "Vintage Polaroid"}
                    {style === "scrapbook" && "Retro Scrapbook"}
                    {style === "swiss" && "Minimal Swiss"}
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Selector */}
            <div>
              <label className="block text-[10px] font-bold text-black/50 uppercase tracking-wider mb-2">
                Select Destination
              </label>
              <select
                value={selectedDestIndex}
                onChange={(e) => {
                  setSelectedDestIndex(Number(e.target.value));
                  setIsCustomImage(false);
                }}
                className="w-full bg-white border border-black/[0.1] text-black rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7a9e64] shadow-sm transition-all cursor-pointer"
              >
                {POSTCARD_DESTINATIONS.map((dest, i) => (
                  <option key={dest.slug} value={i} className="bg-white text-black">
                    {dest.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-[10px] font-bold text-black/50 uppercase tracking-wider mb-2">
                Add Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 180))}
                rows={2}
                className="w-full text-sm bg-white border border-black/[0.1] focus:border-[#7a9e64] focus:outline-none rounded-xl p-4 text-black leading-relaxed resize-none shadow-sm"
                placeholder="Write a message..."
              ></textarea>
              <div className="flex justify-between mt-1 text-[9px] text-black/40 font-bold uppercase tracking-wider">
                <span>Limit: 180 characters</span>
                <span>{message.length}/180</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2.5 bg-white hover:bg-black/5 border border-black/[0.1] text-black text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <FontAwesomeIcon icon={faUpload} />
                Upload Photo
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />

              {isCustomImage && (
                <button
                  onClick={() => setIsCustomImage(false)}
                  className="px-4 py-2.5 bg-transparent border border-black/10 hover:border-black/20 text-black/60 hover:text-black text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Reset Default Photo
                </button>
              )}
            </div>
          </div>

          <div className="pt-2 space-y-3">
            {/* Color palette display */}
            <div className="flex items-center gap-3">
              {palette.map((color, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="w-8 h-8 rounded-lg border border-black/10 shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[8px] text-black/50 font-mono font-bold uppercase tracking-tighter">
                    {color}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={generateDownload}
              disabled={downloading}
              className="w-full px-6 py-3.5 bg-[#7a9e64] hover:bg-[#668753] text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {downloading ? "Generating..." : "Download Postcard"}
            </button>
          </div>
        </div>

        {/* Right Side: Live Preview Panel */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-[#e6e2db] items-center">
          <span className="block text-[10px] font-bold text-black/50 uppercase tracking-wider mb-2.5 self-start">
            Postcard Preview
          </span>

          {/* Layout 1: Classic Split */}
          {layoutStyle === "classic" && (
            <div className="w-full aspect-[3/2] bg-[#faf9f6] text-black rounded-2xl overflow-hidden shadow-2xl border border-black/15 flex select-none">
              <div className="w-[50%] h-full relative overflow-hidden bg-black/10">
                <img src={imageSrc} alt="Postcard View" className="w-full h-full object-cover" />
              </div>
              <div className="w-[50%] h-full p-4 flex flex-col justify-between relative bg-[#faf9f6]">
                <div>
                  <span className="text-[7px] font-black uppercase tracking-widest text-black/35 font-mono">Postcard from East Java</span>
                  <div className="w-full h-px bg-black/[0.06] my-1.5" />
                  <h5 className="text-[13px] font-black uppercase tracking-tight text-black leading-none truncate">{currentDest.name}</h5>
                  <span className="text-[7px] font-bold text-black/40 font-mono uppercase tracking-wider mt-1 block">CODE: {currentDest.slug.toUpperCase()}</span>
                  <p className="text-[9px] font-medium text-black/85 leading-relaxed mt-4 italic line-clamp-6">&quot;{message}&quot;</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {palette.map((color, i) => (
                      <div key={i} className="w-3.5 h-3.5 rounded-md border border-black/5" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <div className="w-9 h-9 rounded-full border border-double border-[#7a9e64]/40 flex flex-col items-center justify-center text-[#7a9e64]/50 leading-none">
                    <span className="text-[4px] font-bold">Malang</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layout 2: Polaroid */}
          {layoutStyle === "polaroid" && (
            <div className="w-[85%] aspect-[3/4.2] bg-white text-black p-4 rounded-xl shadow-2xl border border-black/10 flex flex-col justify-between select-none">
              <div className="w-full aspect-square bg-black/10 relative overflow-hidden rounded-md">
                <img src={imageSrc} alt="Postcard View" className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full border border-dashed border-[#7a9e64]/50 flex flex-col items-center justify-center text-[#7a9e64]/60 leading-none bg-white/70">
                  <span className="text-[3px] font-bold">MALANG</span>
                </div>
              </div>
              <div className="py-3 flex-1 flex items-center justify-center text-center">
                <p className="text-xs font-medium text-[#1b2a4a] italic leading-relaxed px-2 font-serif line-clamp-3">
                  &quot;{message}&quot;
                </p>
              </div>
            </div>
          )}

          {/* Layout 3: Scrapbook */}
          {layoutStyle === "scrapbook" && (
            <div className="w-full aspect-[3/2] bg-[#f3f0e8] text-black rounded-2xl overflow-hidden shadow-2xl border border-black/15 flex p-3 relative select-none">
              {/* Rotated mini polaroid sticked */}
              <div className="w-[50%] h-full bg-white p-2 border border-black/5 shadow-md transform rotate-[-4deg] flex flex-col justify-between">
                <div className="w-full aspect-square bg-black/5 overflow-hidden rounded">
                  <img src={imageSrc} alt="Postcard View" className="w-full h-full object-cover" />
                </div>
                <span className="text-[7px] font-bold text-center uppercase tracking-wide block mt-1">
                  • {currentDest.name} •
                </span>
              </div>

              {/* Message right card */}
              <div className="w-[48%] ml-auto h-full bg-[#faf8f5] border border-[#7a9e64]/20 p-3 flex flex-col justify-between">
                <div className="text-[8px] font-mono text-black/70 leading-relaxed font-bold">
                  {message}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[6px] font-mono uppercase text-black/40">Retro Scrapbook</span>
                  <div className="w-7 h-7 rounded-full border border-dashed border-[#7a9e64]/40 flex items-center justify-center text-[#7a9e64] text-[5px] font-bold">
                    POST
                  </div>
                </div>
              </div>

              {/* Transparent tape effect decoration */}
              <div className="absolute top-2 left-[28%] w-10 h-3 bg-yellow-100/40 transform rotate-12 border border-yellow-200/20" />
            </div>
          )}

          {/* Layout 4: Swiss stark modern */}
          {layoutStyle === "swiss" && (
            <div className="w-full aspect-[3/2] bg-[#0c0c0c] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex select-none">
              {/* Left black column */}
              <div className="w-[45%] h-full p-4 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-1 bg-[#ff3b30] mb-2" />
                  <h5 className="text-md font-black uppercase tracking-tighter leading-tight">{currentDest.name}</h5>
                  <span className="text-[6px] font-mono text-[#ff3b30] uppercase block mt-0.5">CODE // {currentDest.slug}</span>
                  <p className="text-[8px] text-white/70 leading-relaxed mt-3 uppercase tracking-wider">{message}</p>
                </div>
                <div className="flex gap-1 pt-2">
                  {palette.map((color, i) => (
                    <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
              {/* Right half image */}
              <div className="w-[55%] h-full relative overflow-hidden bg-white/5">
                <img src={imageSrc} alt="Postcard View" className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
        {/* Hidden canvas used for high-res file rendering */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
);
}