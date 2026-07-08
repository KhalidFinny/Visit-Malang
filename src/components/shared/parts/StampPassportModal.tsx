import { useEffect, useState, useRef } from "react";
import { useScrollLock } from "../../hooks/useScrollLock";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark, faLocationCrosshairs, faCheck, faCamera,
  faTrash, faUpload, faTrophy, faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import type { StampPassportModalProps, Place } from "../types";
import { verifyLandmarkImage, type VerificationResult } from "../utils/verifyLandmark";
import challenges from "../../../data/challenges.json";

// Date-seeded Fisher-Yates shuffle — gives different subset each day from same pool
function dailyShuffle<T>(arr: T[]): T[] {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  let s = seed;
  const rng = () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const ALL_PLACES: Place[] = challenges;
const DAILY_LIMIT = 7;

function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function StampPassportModal({ isOpen, onClose }: StampPassportModalProps) {
  const [tab, setTab] = useState<"daily" | "collection">("daily");
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [photos, setPhotos] = useState<Record<string, string>>({});
  const [verifs, setVerifs] = useState<Record<string, VerificationResult>>({});
  const [confirm, setConfirm] = useState<{ msg: string; fn: () => void } | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);
  const uploadSlugRef = useRef<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const dailyPlaces = dailyShuffle(ALL_PLACES).slice(0, DAILY_LIMIT);

  // Load saved data
  useEffect(() => {
    if (!isOpen) return;
    const saved = localStorage.getItem("malang_stamps");
    if (saved) { try { setUnlocked(JSON.parse(saved)); } catch {} }
    const p: Record<string, string> = {};
    const v: Record<string, VerificationResult> = {};
    ALL_PLACES.forEach(pl => {
      const raw = localStorage.getItem(`stamp_photo_${pl.slug}`);
      if (raw) {
        p[pl.slug] = raw;
        const sv = localStorage.getItem(`stamp_verif_${pl.slug}`);
        if (sv) { try { v[pl.slug] = JSON.parse(sv); } catch {} }
      }
    });
    setPhotos(p);
    setVerifs(v);
  }, [isOpen]);

  // Live GPS
  useEffect(() => {
    if (!isOpen) return;
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setUserLocation({ lat: ALL_PLACES[0].lat, lng: ALL_PLACES[0].lng }),
      { enableHighAccuracy: true, timeout: 5000 }
    );
    const id = navigator.geolocation.watchPosition(
      (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => {},
      { enableHighAccuracy: true, maximumAge: 3000, timeout: 10000 }
    );
    return () => navigator.geolocation.clearWatch(id);
  }, [isOpen]);

  useScrollLock(isOpen);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const slug = uploadSlugRef.current;
    if (!slug || !e.target.files?.[0]) return;
    const file = e.target.files[0];
    setUploading(slug);
    const reader = new FileReader();
    reader.onload = async (ev) => {
      if (!ev.target?.result) return;
      const data = ev.target.result as string;
      localStorage.setItem(`stamp_photo_${slug}`, data);
      setPhotos(p => ({ ...p, [slug]: data }));
      setStatus("Analyzing photo...");
      const vr = await verifyLandmarkImage(slug, data, file.name);
      setVerifs(v => ({ ...v, [slug]: vr }));
      localStorage.setItem(`stamp_verif_${slug}`, JSON.stringify(vr));
      const pn = ALL_PLACES.find(x => x.slug === slug)?.name;
      setStatus(vr.isVerified ? `${pn} verified! (${Math.round(vr.confidence)}%)` : vr.reason);
      setUploading(null);
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  const collect = (slug: string) => {
    if (unlocked.includes(slug)) return;
    if (!userLocation) { setStatus("Enable GPS to collect."); return; }
    const pl = ALL_PLACES.find(x => x.slug === slug);
    if (!pl) return;
    if (!photos[slug]) { setStatus("Upload a photo first."); return; }
    const v = verifs[slug];
    if (v && !v.isVerified) { setStatus(`Photo doesn't match: ${v.reason}`); return; }
    const d = getDistanceKm(userLocation.lat, userLocation.lng, pl.lat, pl.lng);
    if (d > 2.0) { setStatus(`You're ${d.toFixed(1)}km away. Must be within 2km.`); return; }
    const u = [...unlocked, slug];
    setUnlocked(u);
    localStorage.setItem("malang_stamps", JSON.stringify(u));
    setStatus(`Collected! ${pl.name} added.`);
  };

  const delPhoto = (slug: string) => {
    const pl = ALL_PLACES.find(x => x.slug === slug);
    setConfirm({
      msg: `Delete photo for ${pl?.name || slug}? Stamp will lock.`,
      fn: () => {
        localStorage.removeItem(`stamp_photo_${slug}`);
        localStorage.removeItem(`stamp_verif_${slug}`);
        setPhotos(p => { const n = { ...p }; delete n[slug]; return n; });
        setVerifs(v => { const n = { ...v }; delete n[slug]; return n; });
        setUnlocked(u => { const n = u.filter(s => s !== slug); localStorage.setItem("malang_stamps", JSON.stringify(n)); return n; });
        setStatus("Photo removed.");
        setConfirm(null);
      },
    });
  };

  const resetAll = () => {
    setConfirm({
      msg: "Clear everything? All stamps and photos will be deleted.",
      fn: () => {
        setUnlocked([]);
        localStorage.setItem("malang_stamps", JSON.stringify([]));
        ALL_PLACES.forEach(p => {
          localStorage.removeItem(`stamp_photo_${p.slug}`);
          localStorage.removeItem(`stamp_verif_${p.slug}`);
        });
        setPhotos({});
        setVerifs({});
        setStatus("Cleared.");
        setConfirm(null);
      },
    });
  };

  const dist = (pl: Place) => userLocation ? getDistanceKm(userLocation.lat, userLocation.lng, pl.lat, pl.lng) : null;
  const canCollect = (pl: Place) => {
    if (unlocked.includes(pl.slug)) return false;
    if (!photos[pl.slug]) return false;
    const v = verifs[pl.slug];
    if (v && !v.isVerified) return false;
    const d = dist(pl);
    if (d === null || d > 2.0) return false;
    return true;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 bg-black/60" onClick={onClose}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }} onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#f5f4f0] rounded-3xl shadow-2xl border border-black/10 flex flex-col max-h-[90vh]">

            {/* Header */}
            <div className="px-8 pt-7 pb-4 flex items-center justify-between shrink-0 border-b border-black/[0.06]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#A3B18A]/15 border border-[#A3B18A]/25 flex items-center justify-center text-[#4a5e3a]">
                  <FontAwesomeIcon icon={faTrophy} className="text-lg" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#0A0A0A] tracking-tight">Malang Passport</h2>
                  <p className="text-sm text-black/50">{unlocked.length} places collected</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => { if (navigator.geolocation) navigator.geolocation.getCurrentPosition(p => setUserLocation({ lat: p.coords.latitude, lng: p.coords.longitude })); }}
                  className="w-9 h-9 rounded-full border border-black/10 hover:bg-black/5 text-black/50 hover:text-black flex items-center justify-center transition-all cursor-pointer" title="Refresh GPS">
                  <FontAwesomeIcon icon={faLocationCrosshairs} className="text-sm" />
                </button>
                <button onClick={onClose} className="w-9 h-9 rounded-full border border-black/10 hover:bg-black/5 text-black/50 hover:text-black flex items-center justify-center transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faXmark} className="text-sm" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-8 pt-4 pb-2 flex gap-1 shrink-0">
              <button onClick={() => setTab("daily")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${tab === "daily" ? "bg-[#0A0A0A] text-white" : "bg-white border border-black/10 text-black/60 hover:text-black"}`}>
                <FontAwesomeIcon icon={faShuffle} />
                Today's Spots ({dailyPlaces.length})
              </button>
              <button onClick={() => setTab("collection")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${tab === "collection" ? "bg-[#0A0A0A] text-white" : "bg-white border border-black/10 text-black/60 hover:text-black"}`}>
                <FontAwesomeIcon icon={faTrophy} />
                Collection ({unlocked.length})
              </button>
            </div>

            {/* Status */}
            {status && (
              <div className="px-8 pt-2 shrink-0">
                <div className={`px-4 py-3 rounded-xl text-sm font-medium border ${
                  status.includes("verified") || status.includes("Collected")
                    ? "bg-[#A3B18A]/10 border-[#A3B18A]/20 text-[#4a5e3a]"
                    : status.includes("doesn't") || status.includes("away")
                    ? "bg-rose-500/10 border-rose-500/20 text-rose-700"
                    : "bg-black/[0.02] border-black/10 text-black/60"
                }`}>{status}</div>
              </div>
            )}

            {/* Daily Spots Tab with animation */}
            <AnimatePresence mode="wait">
              {tab === "daily" && (
                <motion.div
                  key="daily"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 overflow-y-auto px-8 py-5 space-y-3 [overscroll-behavior:contain]" data-lenis-prevent="true"
                >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-black/40">New spots appear daily. Visit, snap, collect.</p>
                </div>
                {dailyPlaces.map(pl => {
                  const unlocked2 = unlocked.includes(pl.slug);
                  const hasPhoto = !!photos[pl.slug];
                  const v = verifs[pl.slug];
                  const d = dist(pl);
                  const can = canCollect(pl);
                  return (
                    <div key={pl.slug}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${unlocked2 ? 'bg-white border-[#A3B18A]/30' : 'bg-white/80 border-black/[0.06] hover:border-black/15'}`}>
                      
                      {/* Photo thumb */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-black/[0.03] border border-black/[0.06]">
                        {hasPhoto ? (
                          <img src={photos[pl.slug]} alt="" className={`w-full h-full object-cover ${!unlocked2 ? 'opacity-70' : ''}`} />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-black/20">
                            <FontAwesomeIcon icon={faCamera} className="text-xl mb-1" />
                            <span className="text-[9px] font-bold uppercase">Photo</span>
                          </div>
                        )}
                        {unlocked2 && (
                          <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-[#A3B18A]/20 border border-[#A3B18A]/40 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCheck} className="text-[9px] text-[#4a5e3a]" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A] leading-snug">{pl.name}</h3>
                        <p className="text-xs text-black/50 mt-0.5 mb-2">{pl.desc}</p>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${d !== null && d <= 2.0 ? 'bg-[#A3B18A]/10 text-[#4a5e3a] border-[#A3B18A]/20' : 'bg-black/[0.03] text-black/40 border-black/[0.08]'}`}>
                            {d !== null ? `${d < 1 ? Math.round(d * 1000) + 'm' : d.toFixed(1) + 'km'}` : 'GPS...'}
                          </span>
                          {v && (
                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${v.isVerified ? 'bg-[#A3B18A]/10 text-[#4a5e3a] border-[#A3B18A]/20' : 'bg-rose-500/10 text-rose-600 border-rose-500/20'}`}>
                              {v.isVerified ? `${Math.round(v.confidence)}%` : 'No match'}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-1.5 shrink-0">
                        {!hasPhoto ? (
                          <button onClick={() => { uploadSlugRef.current = pl.slug; fileRef.current?.click(); }}
                            className="px-4 py-2.5 bg-white border border-black/10 hover:border-black/20 text-black/70 hover:text-black text-[10px] font-bold uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm whitespace-nowrap">
                            <FontAwesomeIcon icon={faUpload} className="text-[#A3B18A] text-[10px]" />
                            Photo
                          </button>
                        ) : (
                          <>
                            <button onClick={() => delPhoto(pl.slug)} className="w-8 h-8 bg-white border border-rose-500/15 hover:border-rose-500/30 text-rose-400 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-sm" title="Delete photo">
                              <FontAwesomeIcon icon={faTrash} className="text-[10px]" />
                            </button>
                            {!unlocked2 && (
                              <button onClick={() => collect(pl.slug)} disabled={!can}
                                className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap ${can ? 'bg-[#A3B18A] hover:bg-[#8a9e75] text-white shadow-sm' : 'bg-white border border-black/10 text-black/30 cursor-not-allowed'}`}>
                                {uploading === pl.slug ? '...' : 'Collect'}
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            </AnimatePresence>

            {/* Collection Tab with animation */}
            <AnimatePresence mode="wait">
              {tab === "collection" && (
                <motion.div
                  key="collection"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 overflow-y-auto px-8 py-5 space-y-2 [overscroll-behavior:contain]" data-lenis-prevent="true"
                >
                {unlocked.length === 0 && (
                  <div className="text-center py-16 text-black/30">
                    <FontAwesomeIcon icon={faTrophy} className="text-4xl mb-3 opacity-40" />
                    <p className="text-sm font-medium">No places collected yet</p>
                    <p className="text-xs mt-1">Visit a spot, upload your photo, and collect your stamp!</p>
                  </div>
                )}
                {ALL_PLACES.filter(p => unlocked.includes(p.slug)).map(pl => {
                  const hasPhoto = !!photos[pl.slug];
                  const v = verifs[pl.slug];
                  return (
                    <div key={pl.slug} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#A3B18A]/20">
                      <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-black/[0.03] border border-black/[0.06]">
                        {hasPhoto ? <img src={photos[pl.slug]} alt="" className="w-full h-full object-cover" /> : (
                          <div className="w-full h-full flex items-center justify-center text-black/20">
                            <FontAwesomeIcon icon={faCamera} className="text-lg" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-[#0A0A0A]">{pl.name}</h4>
                        <p className="text-xs text-black/50">{pl.desc}</p>
                        {v && <span className="text-[11px] text-[#4a5e3a] font-semibold block mt-0.5">Verified {Math.round(v.confidence)}%</span>}
                      </div>
                      <button onClick={() => delPhoto(pl.slug)} className="w-8 h-8 bg-white border border-rose-500/15 hover:border-rose-500/30 text-rose-400 rounded-lg flex items-center justify-center transition-all cursor-pointer shrink-0" title="Remove">
                        <FontAwesomeIcon icon={faTrash} className="text-[10px]" />
                      </button>
                    </div>
                  );
                })}
                {unlocked.length > 0 && (
                  <button onClick={resetAll} className="w-full py-3 text-xs font-bold text-rose-500/60 hover:text-rose-500 uppercase tracking-wider transition-all cursor-pointer">
                    Clear all progress
                  </button>
                )}
              </motion.div>
            )}

            </AnimatePresence>

            {/* Confirm Dialog */}
            <AnimatePresence>
              {confirm && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-black/40 flex items-center justify-center p-8 rounded-3xl">
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15 }} className="bg-[#f5f4f0] rounded-2xl p-6 max-w-sm w-full shadow-xl border border-black/10 text-center">
                    <p className="text-sm text-black/80 leading-relaxed mb-5">{confirm.msg}</p>
                    <div className="flex items-center justify-center gap-3">
                      <button onClick={() => setConfirm(null)} className="px-5 py-2.5 bg-white border border-black/10 hover:border-black/20 text-black/70 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer">Cancel</button>
                      <button onClick={confirm.fn} className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm">Confirm</button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <input type="file" ref={fileRef} accept="image/*" className="hidden" onChange={handleUpload} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
