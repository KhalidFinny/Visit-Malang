import React, { useRef, useState, useEffect } from "react";
import { useScrollLock } from "../../hooks/useScrollLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCamera, faSpinner, faMapLocationDot, faEye } from "@fortawesome/free-solid-svg-icons";
import type { VisualLensModalProps } from "../types";
import { classifyLocationPhoto, type LensLocationCandidate } from "../utils/lensClassifier";

const SCAN_STYLE = `
  @keyframes scan {
    0%, 100% { top: 0%; }
    50% { top: 100%; }
  }
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
export default function VisualLensModal({ isOpen, onClose }: VisualLensModalProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [telemetry, setTelemetry] = useState<string[]>([]);
  const [result, setResult] = useState<LensLocationCandidate | null>(null);
  const [candidates, setCandidates] = useState<LensLocationCandidate[]>([]);
  const [isGpsActive, setIsGpsActive] = useState(false);
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Obtain user GPS on open
  useEffect(() => {
    if (isOpen) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            setIsGpsActive(true);
          },
          () => {
            setIsGpsActive(false);
          },
          { enableHighAccuracy: true, timeout: 5000 }
        );
      }
    } else {
      setImageSrc(null);
      setScanning(false);
      setTelemetry([]);
      setResult(null);
      setCandidates([]);
    }
  }, [isOpen]);

  // Lock background body & wheel scroll when open
  useScrollLock(isOpen);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result as string);
          runVisualMatching(file.name, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const runVisualMatching = async (filename: string, dataUrl: string) => {
    setScanning(true);
    setResult(null);
    setCandidates([]);
    setTelemetry(["Opening photo...", "Analyzing image color histogram..."]);

    const delays = [400, 900, 1400, 1800];
    const logs = [
      "Sampling color spectrum & saturation...",
      isGpsActive ? "Cross-referencing phone GPS coordinates..." : "Evaluating visual landmark features...",
      "Ranking candidate locations in Malang...",
      "Finalizing location discovery..."
    ];

    delays.forEach((delay, i) => {
      setTimeout(() => {
        setTelemetry(prev => [...prev, logs[i]]);
      }, delay);
    });

    setTimeout(async () => {
      const output = await classifyLocationPhoto(dataUrl, filename, userCoords);
      setResult(output.topMatch);
      setCandidates(output.candidates);
      setScanning(false);
    }, 2000);
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[550px] md:h-[460px] text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <FontAwesomeIcon icon={faTimes} className="text-xs" />
        </button>

        {/* Left Side: Upload & Scan Display */}
        <div className="w-full md:w-1/2 bg-[#050505] border-b md:border-b-0 md:border-r border-white/[0.08] relative flex flex-col items-center justify-center p-6 h-[240px] md:h-full">
          {imageSrc ? (
            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <img src={imageSrc} alt="Preview" className="w-full h-full object-cover" />
              
              {/* Scanning Overlay */}
              {scanning && (
                <>
                  <div className="absolute inset-0 bg-sky-500/10" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-sky-400/90 shadow-[0_0_12px_#38bdf8] animate-[scan_2.2s_infinite_ease-in-out]" />
                  {/* Bounding box simulation */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-dashed border-sky-400/60 rounded-xl flex items-start justify-start p-1.5">
                    <span className="text-[7px] font-mono text-sky-400 font-black uppercase tracking-wider bg-black/60 px-1.5 py-0.5 rounded">
                      Matching Landmark...
                    </span>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full border border-dashed border-white/15 hover:border-[#7a9e64]/40 hover:bg-white/[0.02] rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all cursor-pointer select-none"
            >
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/50 mb-3.5">
                <FontAwesomeIcon icon={faCamera} className="text-lg" />
              </div>
              <h5 className="text-xs font-bold uppercase tracking-wider mb-1">
                Upload Photo or Screenshot
              </h5>
              <p className="text-[10px] text-white/40 max-w-[180px] leading-relaxed">
                Drag and drop or click to upload. We'll identify the destination.
              </p>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* Right Side: Recognition outcomes */}
        <div data-lenis-prevent="true" className="w-full md:w-1/2 p-6 flex flex-col justify-between h-[310px] md:h-full overflow-y-auto [overscroll-behavior:contain]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7a9e64]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#7a9e64]">
                Malang Photo Finder
              </span>
            </div>

            {/* Display logs when scanning, or prompt */}
            {scanning && (
              <div className="space-y-2 py-4">
                <div className="flex items-center gap-2 text-xs text-white/55 font-bold uppercase tracking-wider">
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin text-sky-400" />
                  <span>Identifying photo...</span>
                </div>
                <div className="bg-black/40 border border-white/[0.05] p-3.5 rounded-xl h-[180px] overflow-y-auto font-mono text-[9px] text-sky-400/80 space-y-1.5 select-none scrollbar-none">
                  {telemetry.map((log, i) => (
                    <div key={i}>{log}</div>
                  ))}
                </div>
              </div>
            )}

            {!scanning && !result && (
              <div className="py-12 text-center md:text-left select-none">
                <p className="text-sm text-white/50 leading-relaxed font-normal">
                  Drop a snapshot of Mount Bromo caldera, Tumpak Sewu waterfalls, Toko Oen cafe facade, or Kampung Warna Warni (Jodipan) houses to find their locations instantly.
                </p>
              </div>
            )}

            {/* Results Display */}
            {!scanning && result && (
              <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] bg-[#7a9e64]/15 border border-[#7a9e64]/30 px-2 py-0.5 rounded text-[#7a9e64] font-bold uppercase tracking-wider">
                      {result.confidence}% match
                    </span>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
                      {result.category}
                    </span>
                    {isGpsActive && result.distanceKm !== undefined && (
                      <span className="text-[10px] bg-sky-500/15 border border-sky-500/30 text-sky-400 px-2 py-0.5 rounded font-mono font-bold">
                        📍 {result.distanceKm < 1 ? Math.round(result.distanceKm * 1000) + 'm away' : result.distanceKm.toFixed(1) + 'km away'}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-1">
                    {result.name}
                  </h4>
                  <p className="text-[10px] text-white/40 font-mono italic">
                    Match signal: {result.matchReason}
                  </p>
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {result.description}
                </p>

                {/* Alternative Candidate Suggestions */}
                {candidates.length > 0 && (
                  <div className="pt-2 border-t border-white/[0.08]">
                    <span className="block text-[9px] font-bold text-white/40 uppercase tracking-widest mb-2">
                      Alternative Candidates
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {candidates.map((cand) => (
                        <button
                          key={cand.slug}
                          onClick={() => setResult(cand)}
                          className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-left transition-all cursor-pointer"
                        >
                          <span className="text-xs font-semibold text-white/90 truncate">{cand.name}</span>
                          <span className="text-[9px] font-mono text-white/40 shrink-0 ml-2">{cand.confidence}%</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action buttons */}
          {!scanning && result && (
            <div className="space-y-2 pt-3 border-t border-white/[0.06]">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(result.name + ' Malang Indonesia')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 bg-[#7a9e64] hover:bg-[#668753] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <FontAwesomeIcon icon={faMapLocationDot} className="text-xs" />
                <span>Navigate in Google Maps</span>
              </a>

              <a
                href={`/place/${result.slug}`}
                onClick={onClose}
                className="w-full px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faEye} className="text-xs" />
                <span>Explore Place Details</span>
              </a>
            </div>
          )}
          {/* Simple default reset if no photo uploaded */}
          {!scanning && !result && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Select Image File
            </button>
          )}
        </div>
        <style dangerouslySetInnerHTML={{ __html: SCAN_STYLE }} />
      </div>
    </div>
  );
}