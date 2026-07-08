import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLock } from "../../hooks/useScrollLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCamera, faSpinner, faMapLocationDot, faEye } from "@fortawesome/free-solid-svg-icons";
import type { VisualLensModalProps } from "../types";
import { zeroShotClassify, type MLMatchResult } from "../utils/lensML";

export default function VisualLensModal({ isOpen, onClose }: VisualLensModalProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<MLMatchResult | null>(null);
  const [candidates, setCandidates] = useState<MLMatchResult[]>([]);
  const [isUnknown, setIsUnknown] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setImageSrc(null); setScanning(false); setResult(null);
      setCandidates([]); setIsUnknown(false);
    }
  }, [isOpen]);

  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setImageSrc(event.target.result as string);
        runVisualMatching(event.target.result as string);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const runVisualMatching = async (dataUrl: string) => {
    setScanning(true); setResult(null); setCandidates([]); setIsUnknown(false);
    const img = new Image(); img.src = dataUrl; await img.decode();
    const output = await zeroShotClassify(img);
    setIsUnknown(output.isUnknown); setResult(output.topMatch);
    setCandidates(output.candidates); setScanning(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }} onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#f5f4f0] rounded-3xl shadow-2xl border border-black/10 flex flex-col md:flex-row overflow-hidden">

            <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white border border-black/10 text-black/50 hover:text-black flex items-center justify-center transition-all cursor-pointer">
              <FontAwesomeIcon icon={faTimes} className="text-xs" />
            </button>

            <div className="w-full md:w-1/2 bg-[#f0ebe6] border-b md:border-b-0 md:border-r border-black/[0.06] relative flex flex-col items-center justify-center p-6 h-[240px] md:h-full">
              {imageSrc ? (
                <div className="w-full h-full relative rounded-2xl overflow-hidden bg-white border border-black/[0.06]">
                  <img src={imageSrc} alt="Preview" className="w-full h-full object-cover" />
                  {scanning && <div className="absolute inset-0 bg-sky-500/5 flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-[#A3B18A] border-t-transparent animate-spin" /></div>}
                </div>
              ) : (
                <div onClick={() => fileInputRef.current?.click()} className="w-full h-full border-2 border-dashed border-black/10 hover:border-[#A3B18A]/40 rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all cursor-pointer select-none">
                  <div className="w-14 h-14 rounded-full bg-[#A3B18A]/10 border border-[#A3B18A]/20 flex items-center justify-center text-[#A3B18A] mb-3">
                    <FontAwesomeIcon icon={faCamera} className="text-xl" />
                  </div>
                  <h5 className="text-sm font-bold text-[#0A0A0A] uppercase tracking-wider mb-1">Tap to Upload</h5>
                  <p className="text-xs text-black/50 max-w-[180px] leading-relaxed">Upload a photo to discover its Malang location</p>
                </div>
              )}
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>

            <div data-lenis-prevent="true" className="w-full md:w-1/2 p-6 flex flex-col justify-between h-[310px] md:h-full overflow-y-auto [overscroll-behavior:contain]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#A3B18A]">Malang Photo Finder</span>
                </div>
                {scanning && (
                  <div className="space-y-3 py-4">
                    <div className="flex items-center gap-2 text-sm text-black/60 font-medium">
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin text-[#A3B18A]" />
                      <span>Identifying location...</span>
                    </div>
                    <div className="bg-white border border-black/[0.06] p-4 rounded-xl text-xs text-black/50">Comparing your photo against known Malang landmarks...</div>
                  </div>
                )}
                {!scanning && isUnknown && (
                  <div className="py-8 text-center"><h4 className="text-base font-bold text-[#0A0A0A] mb-2">Not Recognized</h4><p className="text-sm text-black/50">This photo doesn't match any Malang landmark.</p></div>
                )}
                {!scanning && !result && !isUnknown && (
                  <div className="py-8 text-center"><p className="text-sm text-black/50">Upload a photo to identify which Malang landmark it is.</p></div>
                )}
                {!scanning && result && !isUnknown && (
                  <div className="space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs bg-[#A3B18A]/15 border border-[#A3B18A]/25 px-2.5 py-1 rounded text-[#4a5e3a] font-bold">{result.confidence}% match</span>
                        <span className="text-xs text-black/40 font-bold uppercase">{result.category}</span>
                      </div>
                      <h4 className="text-xl font-bold text-[#0A0A0A] tracking-tight mb-0.5">{result.name}</h4>
                      <p className="text-xs text-black/40 italic">{result.matchReason}</p>
                    </div>
                    <p className="text-sm text-black/70">{result.description}</p>
                    {candidates.length > 0 && (
                      <div className="pt-2 border-t border-black/[0.06]">
                        <span className="block text-[10px] font-bold text-black/40 uppercase mb-2">Other possibilities</span>
                        {candidates.map((cand) => (
                          <button key={cand.slug} onClick={() => setResult(cand)}
                            className="flex items-center justify-between w-full p-2.5 rounded-xl bg-white hover:bg-black/[0.02] border border-black/[0.06] text-left transition-all cursor-pointer mb-1.5">
                            <span className="text-sm font-semibold text-[#0A0A0A] truncate">{cand.name}</span>
                            <span className="text-xs text-black/40 shrink-0 ml-2">{cand.confidence}%</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {!scanning && result && !isUnknown && (
                <div className="space-y-2 pt-4 border-t border-black/[0.06] mt-4">
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(result.name + ' Malang Indonesia')}`} target="_blank" rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-[#A3B18A] hover:bg-[#8a9e75] text-white text-xs font-bold uppercase rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all">
                    <FontAwesomeIcon icon={faMapLocationDot} />
                    <span>Navigate in Google Maps</span>
                  </a>
                  <a href={`/place/${result.slug}`} onClick={onClose}
                    className="w-full px-4 py-3 bg-white border border-black/10 hover:border-black/20 text-black/70 hover:text-black text-xs font-bold uppercase rounded-xl flex items-center justify-center gap-2 transition-all">
                    <FontAwesomeIcon icon={faEye} />
                    <span>Explore Details</span>
                  </a>
                </div>
              )}
              {!scanning && !result && !isUnknown && (
                <button onClick={() => fileInputRef.current?.click()}
                  className="w-full px-4 py-3 bg-white border border-black/10 hover:border-black/20 text-black/70 hover:text-black text-xs font-bold uppercase rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all">
                  <FontAwesomeIcon icon={faCamera} className="text-[#A3B18A]" />
                  <span>Select Image</span>
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
