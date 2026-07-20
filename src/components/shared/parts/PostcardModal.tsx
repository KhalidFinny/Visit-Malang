import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faDownload, faPalette, faImage } from "@fortawesome/free-solid-svg-icons";
import { useScrollLock } from "../../hooks/useScrollLock";
import type { PostcardModalProps, PostcardLayoutKey } from "../types";
import CloseButton from "./CloseButton";

const LAYOUTS: { key: PostcardLayoutKey; labelKey: string; icon: string }[] = [
  { key: "classic", labelKey: "shared.postcard.layouts.classic", icon: "▐" },
  { key: "fullbleed", labelKey: "shared.postcard.layouts.fullbleed", icon: "◻" },
  { key: "polaroid", labelKey: "shared.postcard.layouts.polaroid", icon: "▯" },
];

/** Sample evenly-spaced colors from an image URL */
function samplePalette(url: string): Promise<string[]> {
  return new Promise((resolve) => {
    const img = new Image();
    // Only set crossOrigin for non-data URLs
    if (!url.startsWith("data:")) img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = 40; c.height = 40;
        const ctx = c.getContext("2d");
        if (!ctx) { resolve(["#A3B18A", "#4a5e3a", "#0A0A0A", "#f5f4f0"]); return; }
        ctx.drawImage(img, 0, 0, 40, 40);
        const d = ctx.getImageData(0, 0, 40, 40).data;
        const colors: string[] = [];
        const seen = new Set<string>();
        for (let i = 0; i < 16; i++) {
          const idx = Math.floor((i / 16) * (d.length / 4)) * 4;
          const hex = "#" + [d[idx], d[idx + 1], d[idx + 2]].map(x => x.toString(16).padStart(2, "0")).join("");
          if (!seen.has(hex)) { seen.add(hex); colors.push(hex); }
        }
        resolve(colors.length >= 4 ? colors.slice(0, 6) : ["#A3B18A", "#4a5e3a", "#0A0A0A", "#f5f4f0"]);
      } catch { resolve(["#A3B18A", "#4a5e3a", "#0A0A0A", "#f5f4f0"]); }
    };
    img.onerror = () => resolve(["#A3B18A", "#4a5e3a", "#0A0A0A", "#f5f4f0"]);
  });
}

/** Helper: wrap text on canvas */
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const lines: string[] = [];
  let cur = "";
  for (const w of text.split(" ")) {
    const t = cur ? cur + " " + w : w;
    if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; }
    else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}

export default function PostcardModal({ isOpen, onClose }: PostcardModalProps) {
  const { t } = useTranslation();
  const [dest, setDest] = useState("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [msg, setMsg] = useState(() => t("shared.postcard.defaultMessage"));
  const [layout, setLayout] = useState<PostcardLayoutKey>("classic");
  const [palette, setPalette] = useState<string[]>(["#A3B18A", "#4a5e3a", "#0A0A0A", "#f5f4f0"]);
  const [downloading, setDownloading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useScrollLock(isOpen);
  const previewDestination = dest || t("shared.postcard.previewDestination");
  const exportDestination = dest || t("shared.postcard.exportDestination");
  const previewRegion = t("shared.postcard.previewRegion");
  const exportRegion = t("shared.postcard.exportRegion");

  // Extract palette when image changes
  useEffect(() => {
    if (!imageSrc) return;
    samplePalette(imageSrc).then(setPalette);
  }, [imageSrc]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const reader = new FileReader();
    reader.onload = (ev) => { if (ev.target?.result) setImageSrc(ev.target.result as string); };
    reader.readAsDataURL(e.target.files[0]);
  };

  const generateDownload = useCallback(async () => {
    if (!imageSrc) return;
    setDownloading(true);

    const c = document.createElement("canvas");
    c.width = 900; c.height = 600;
    const ctx = c.getContext("2d");
    if (!ctx) { setDownloading(false); return; }

    const img = new Image();
    if (!imageSrc.startsWith("data:")) img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      const bg = palette[3] || "#f5f4f0";
      const fg = palette[1] || "#0A0A0A";
      const accent = palette[0] || "#A3B18A";

      if (layout === "classic") {
        // Photo on right 2/3, text on left
        ctx.fillStyle = bg; ctx.fillRect(0, 0, 900, 600);
        const px = 340, pw = 560, ph = 600;
        ctx.drawImage(img, px, 0, pw, ph);
        const grad = ctx.createLinearGradient(px, 0, px + 100, 0);
        grad.addColorStop(0, bg + "CC"); grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad; ctx.fillRect(px, 0, 100, ph);
        ctx.fillStyle = "rgba(0,0,0,0.3)"; ctx.fillRect(px, ph - 80, pw, 80);
        ctx.fillStyle = fg; ctx.font = "900 28px 'Inter', sans-serif";
        ctx.fillText(exportDestination.toUpperCase(), 40, 80);
        ctx.fillStyle = accent; ctx.font = "bold 10px 'Inter', sans-serif";
        ctx.fillText(exportRegion, 40, 105);
        ctx.fillStyle = fg; ctx.font = "500 16px 'Inter', sans-serif";
        wrapText(ctx, `"${msg}"`, 320).forEach((line, i) => ctx.fillText(line, 40, 150 + i * 26));
        palette.slice(0, 5).forEach((color, i) => { ctx.fillStyle = color; ctx.fillRect(40 + i * 36, 520, 28, 28); });
        ctx.strokeStyle = "rgba(255,255,255,0.3)"; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(840, 60, 35, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(840, 60, 25, 0, Math.PI * 2); ctx.stroke();
      } else if (layout === "fullbleed") {
        // Photo fills entire canvas, text overlaid
        ctx.drawImage(img, 0, 0, 900, 600);
        ctx.fillStyle = "rgba(0,0,0,0.4)"; ctx.fillRect(0, 0, 900, 600);
        // Bottom gradient for text
        const g2 = ctx.createLinearGradient(0, 300, 0, 600);
        g2.addColorStop(0, "transparent"); g2.addColorStop(1, "rgba(0,0,0,0.7)");
        ctx.fillStyle = g2; ctx.fillRect(0, 300, 900, 300);
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff"; ctx.font = "900 40px 'Inter', sans-serif";
        ctx.fillText(exportDestination.toUpperCase(), 450, 420);
        ctx.fillStyle = accent; ctx.font = "bold 12px 'Inter', sans-serif";
        ctx.fillText(exportRegion, 450, 455);
        ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.font = "500 18px 'Inter', sans-serif";
        wrapText(ctx, `"${msg}"`, 500).forEach((line, i) => ctx.fillText(line, 450, 500 + i * 28));
        ctx.textAlign = "left";
        palette.slice(0, 5).forEach((color, i) => { ctx.fillStyle = color; ctx.fillRect(40 + i * 36, 40, 28, 28); });
      } else if (layout === "polaroid") {
        // White polaroid frame, photo centered, text below
        ctx.fillStyle = "#f5f0e8"; ctx.fillRect(0, 0, 900, 600);
        // Shadow
        ctx.fillStyle = "rgba(0,0,0,0.1)"; ctx.fillRect(65, 65, 520, 520);
        // Photo area
        ctx.fillStyle = "#fff"; ctx.fillRect(55, 55, 520, 520);
        ctx.drawImage(img, 75, 75, 480, 480);
        // Text below photo — destination + caption
        ctx.textAlign = "center";
        ctx.fillStyle = fg; ctx.font = "900 20px 'Inter', sans-serif";
        ctx.fillText(exportDestination.toUpperCase(), 315, 500);
        ctx.fillStyle = "rgba(0,0,0,0.5)"; ctx.font = "500 13px 'Inter', sans-serif";
        wrapText(ctx, `${msg}`, 400).forEach((line, i) => ctx.fillText(line, 315, 525 + i * 18));
        ctx.textAlign = "left";
        palette.slice(0, 5).forEach((color, i) => { ctx.fillStyle = color; ctx.fillRect(680 + i * 36, 50, 28, 28); });
      }

      const link = document.createElement("a");
      link.download = `malang-${layout}.png`;
      link.href = c.toDataURL("image/png");
      link.click();
      setDownloading(false);
    };
    img.onerror = () => setDownloading(false);
  }, [imageSrc, dest, msg, palette, layout]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-0 sm:p-8" onClick={onClose}>
          <motion.div initial={{ y: 40, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }} onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-4xl h-[92dvh] sm:h-auto bg-[#f5f4f0] sm:rounded-3xl shadow-2xl sm:border border-black/10 flex flex-col overflow-hidden">

            {/* Top Handle (mobile) */}
            <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-black/15" />
            </div>
            <div className="px-6 pt-5 pb-3 flex items-center justify-between shrink-0 border-b border-black/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#A3B18A]/15 border border-[#A3B18A]/25 flex items-center justify-center text-[#A3B18A]">
                  <FontAwesomeIcon icon={faPalette} className="text-sm" />
                </div>
                <h2 className="text-lg font-bold text-[#0A0A0A] tracking-tight">{t("shared.postcard.title")}</h2>
              </div>
              <CloseButton onClick={onClose} />
            </div>

            <div className="flex flex-col md:flex-row gap-0 p-5 md:p-6 flex-1 min-h-0">
              <div className="w-full md:w-[280px] shrink-0 space-y-3 md:pr-5 md:border-r border-black/[0.06] overflow-y-auto">
                
                {/* Destination - free text */}
                <div>
                  <label className="text-sm font-bold text-black/40 uppercase tracking-widest block mb-1.5">{t("shared.postcard.destinationLabel")}</label>
                  <input type="text" value={dest} onChange={(e) => setDest(e.target.value)} placeholder={t("shared.postcard.destinationPlaceholder")}
                    className="w-full px-3.5 py-2.5 bg-white border border-black/10 rounded-xl text-sm text-[#0A0A0A] focus:outline-none shadow-sm placeholder:text-black/30" />
                </div>

                {/* Layout selector */}
                <div>
                  <label className="text-sm font-bold text-black/40 uppercase tracking-widest block mb-1.5">{t("shared.postcard.designLabel")}</label>
                  <div className="flex gap-1.5">
                    {LAYOUTS.map((l) => (
                      <button key={l.key} onClick={() => setLayout(l.key)}
                        className={`flex-1 px-3 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          layout === l.key ? 'bg-[#0A0A0A] text-white' : 'bg-white border border-black/10 text-black/60 hover:text-black'
                        }`}>
                        {t(l.labelKey)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upload photo */}
                <div>
                  <label className="text-sm font-bold text-black/40 uppercase tracking-widest block mb-1.5">{t("shared.postcard.photoLabel")}</label>
                  <button onClick={() => fileRef.current?.click()}
                    className="w-full px-3.5 py-2.5 bg-white border border-dashed border-black/15 hover:border-[#A3B18A]/40 text-black/60 hover:text-black text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm">
                    <FontAwesomeIcon icon={faUpload} className="text-[#A3B18A]" />
                    {imageSrc ? t("shared.postcard.replacePhoto") : t("shared.postcard.uploadPhoto")}
                  </button>
                  <input type="file" ref={fileRef} onChange={handleUpload} accept="image/*" className="hidden" />
                </div>

                {/* Caption */}
                <div>
                  <label className="text-sm font-bold text-black/40 uppercase tracking-widest block mb-1.5">{t("shared.postcard.captionLabel")}</label>
                  <textarea value={msg} onChange={(e) => setMsg(e.target.value.slice(0, 120))} rows={2}
                    className="w-full px-3.5 py-2.5 bg-white border border-black/10 rounded-xl text-sm text-[#0A0A0A] leading-relaxed resize-none focus:outline-none shadow-sm"
                    placeholder={t("shared.postcard.captionPlaceholder")} />
                  <span className="text-sm text-black/30 mt-1 block text-right">{msg.length}/120</span>
                </div>


                <button onClick={generateDownload} disabled={downloading || !imageSrc}
                  className="w-full px-4 py-3 bg-[#A3B18A] hover:bg-[#8a9e75] text-white text-sm font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-60">
                  <FontAwesomeIcon icon={faDownload} className="text-sm" />
                  {downloading ? t("shared.postcard.generating") : t("shared.postcard.download")}
                </button>
              </div>

              {/* Preview */}
              <div className="flex-1 mt-4 md:mt-0 md:pl-5 flex items-center justify-center min-h-0">
                <div className="relative w-full max-w-[680px] bg-white rounded-2xl shadow-lg border border-black/[0.06] overflow-hidden" style={{ aspectRatio: "3/2" }}>
                  {imageSrc ? (
                    <>
                      {layout === "classic" && (
                        <div className="relative w-full h-full">
                          <img src={imageSrc} alt="" className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f4f0]/95 via-[#f5f4f0]/50 to-transparent" />
                          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
                            <span className="text-sm font-bold text-[#A3B18A] uppercase tracking-[0.3em] mb-2">{previewRegion}</span>
                            <h3 className="text-2xl md:text-3xl font-black text-[#0A0A0A] uppercase tracking-tight leading-tight max-w-[220px]">{previewDestination}</h3>
                            <p className="text-sm text-black/70 mt-3 max-w-[220px] leading-relaxed italic">&ldquo;{msg}&rdquo;</p>
                          </div>
                          <div className="absolute bottom-4 right-4 flex gap-1">
                            {palette.slice(0, 4).map((color, i) => (<div key={i} className="w-5 h-5 rounded-md border border-white/30 shadow-sm" style={{ backgroundColor: color }} />))}
                          </div>
                        </div>
                      )}
                      {layout === "fullbleed" && (
                        <div className="relative w-full h-full">
                          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center">
                            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">{previewDestination}</h3>
                            <span className="text-sm font-bold text-[#A3B18A] uppercase tracking-[0.3em] mt-2 mb-3">{previewRegion}</span>
                            <p className="text-sm text-white/80 max-w-md leading-relaxed italic">&ldquo;{msg}&rdquo;</p>
                          </div>
                          <div className="absolute top-4 left-4 flex gap-1">
                            {palette.slice(0, 4).map((color, i) => (<div key={i} className="w-4 h-4 rounded border border-white/30" style={{ backgroundColor: color }} />))}
                          </div>
                        </div>
                      )}
                      {layout === "polaroid" && (
                        <div className="relative w-full h-full bg-[#f5f0e8] flex items-center justify-center">
                          <div className="w-[75%] h-[85%] bg-white shadow-xl rounded-sm p-3 pb-16 flex flex-col">
                            <div className="flex-1 rounded-sm overflow-hidden bg-black/5">
                              <img src={imageSrc} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="px-1 mt-2 text-center">
                              <h3 className="text-sm font-bold text-[#0A0A0A] truncate">{previewDestination}</h3>
                              <p className="text-sm text-black/50 mt-0.5 italic leading-tight line-clamp-2">{msg}</p>
                            </div>
                          </div>
                          <div className="absolute bottom-4 right-4 flex gap-1">
                            {palette.slice(0, 4).map((color, i) => (<div key={i} className="w-4 h-4 rounded border border-white/50 shadow-sm" style={{ backgroundColor: color }} />))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    /* Placeholder — decorative bg pattern when no photo */
                    <div className="relative w-full h-full bg-gradient-to-br from-[#A3B18A]/20 via-[#f5f4f0] to-[#A3B18A]/10 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:20px_20px]" />
                      <div className="text-center z-10">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-white/80 border border-black/10 flex items-center justify-center text-black/30 mb-4 shadow-sm">
                          <FontAwesomeIcon icon={faImage} className="text-2xl" />
                        </div>
                        <p className="text-sm font-semibold text-black/40">{t("shared.postcard.placeholderTitle")}</p>
                        <p className="text-sm text-black/25 mt-1">{t("shared.postcard.placeholderDescription")}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
