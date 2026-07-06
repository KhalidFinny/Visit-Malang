import { useEffect, useState, useRef } from "react";
import { useScrollLock } from "../../hooks/useScrollLock";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faXmark, 
  faLocationCrosshairs, 
  faCheck, 
  faCompass,
  faMountain,
  faWater,
  faPalette,
  faArchway,
  faChurch,
  faMountainSun,
  faCamera,
  faTrash,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import type { StampLocation, StampPassportModalProps } from "../types";
import { verifyLandmarkImage, type VerificationResult } from "../utils/verifyLandmark";


const STAMP_LOCATIONS: StampLocation[] = [
  {
    slug: "mount-bromo",
    name: "Mount Bromo",
    lat: -7.9425,
    lng: 112.9530,
    description: "Volcanic Caldera Viewpoint",
    icon: faMountain
  },
  {
    slug: "tumpak-sewu",
    name: "Tumpak Sewu",
    lat: -8.2307,
    lng: 112.9167,
    description: "Waterfall Valley Ravine",
    icon: faWater
  },
  {
    slug: "mount-semeru",
    name: "Mount Semeru",
    lat: -8.1081,
    lng: 112.9224,
    description: "Highest Peak in Java",
    icon: faMountainSun
  },
  {
    slug: "pantai-3-warna",
    name: "Pantai 3 Warna",
    lat: -8.4444,
    lng: 112.6789,
    description: "Eco-Marine Conservation Beach",
    icon: faWater
  },
  {
    slug: "coban-pelangi",
    name: "Coban Pelangi",
    lat: -8.0193,
    lng: 112.8234,
    description: "Rainbow Waterfall Descent",
    icon: faWater
  },
  {
    slug: "pulau-sempu",
    name: "Pulau Sempu",
    lat: -8.4483,
    lng: 112.6881,
    description: "Nature Reserve Lagoon",
    icon: faMountain
  },
  {
    slug: "budug-asu",
    name: "Budug Asu",
    lat: -7.8078,
    lng: 112.7089,
    description: "Offroad Highland Ridge",
    icon: faMountain
  },
  {
    slug: "jatim-park-1",
    name: "Jatim Park 1",
    lat: -7.8841,
    lng: 112.5240,
    description: "Education Theme Park",
    icon: faPalette
  },
  {
    slug: "museum-angkut",
    name: "Museum Angkut",
    lat: -7.8789,
    lng: 112.5195,
    description: "Vintage Transportation Gallery",
    icon: faArchway
  },
  {
    slug: "kayutangan-heritage",
    name: "Kayutangan Heritage",
    lat: -7.9826,
    lng: 112.6304,
    description: "Colonial Architectural Street",
    icon: faChurch
  },
  {
    slug: "sumber-sirah",
    name: "Sumber Sirah",
    lat: -8.1432,
    lng: 112.6048,
    description: "Crystal Water Springs",
    icon: faWater
  },
  {
    slug: "nakoa-coffee",
    name: "Nakoa Coffee",
    lat: -7.9666,
    lng: 112.6326,
    description: "Urban Remote Nomad Spot",
    icon: faPalette
  }
];


// Haversine formula to compute distance in km
function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function StampPassportModal({ isOpen, onClose }: StampPassportModalProps) {
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [scanStatus, setScanStatus] = useState<string | null>(null);
  const [simulatedSlug, setSimulatedSlug] = useState<string>("none");
  const [localPhotos, setLocalPhotos] = useState<Record<string, string>>({});
  const [verifications, setVerifications] = useState<Record<string, VerificationResult>>({});
  const [selectedSlugForUpload, setSelectedSlugForUpload] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load unlocked list and photos on mount
  useEffect(() => {
    const savedStamps = localStorage.getItem("malang_unlocked_stamps");
    if (savedStamps) {
      try {
        setUnlocked(JSON.parse(savedStamps));
      } catch (e) {
        console.error(e);
      }
    }

    const photos: Record<string, string> = {};
    const verifs: Record<string, VerificationResult> = {};
    STAMP_LOCATIONS.forEach(loc => {
      const p = localStorage.getItem(`malang_stamp_photo_${loc.slug}`);
      if (p) {
        photos[loc.slug] = p;
        const savedVerif = localStorage.getItem(`malang_stamp_verif_${loc.slug}`);
        if (savedVerif) {
          try {
            verifs[loc.slug] = JSON.parse(savedVerif);
          } catch (e) {
            console.error(e);
          }
        } else {
          // Run verification on saved image
          verifyLandmarkImage(loc.slug, p).then(v => {
            setVerifications(prev => ({ ...prev, [loc.slug]: v }));
            localStorage.setItem(`malang_stamp_verif_${loc.slug}`, JSON.stringify(v));
          });
        }
      }
    });
    setLocalPhotos(photos);
    setVerifications(verifs);
  }, [isOpen]);

  // Request current coordinates on mount / open
  useEffect(() => {
    if (isOpen) {
      getCurrentCoordinates();
    }
  }, [isOpen, simulatedSlug]);

  // Lock background body & wheel scroll when open
  useScrollLock(isOpen);

  const getCurrentCoordinates = () => {
    if (simulatedSlug !== "none") {
      const match = STAMP_LOCATIONS.find(l => l.slug === simulatedSlug);
      if (match) {
        setUserLocation({ lat: match.lat, lng: match.lng });
        setScanStatus(`Coordinates simulated at ${match.name}`);
      }
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setScanStatus("GPS signal locked.");
        },
        () => {
          // Default to center of Malang city if Geolocation fails
          setUserLocation({ lat: -7.9826, lng: 112.6304 });
          setScanStatus("Using default location (Malang Center). Enable GPS/Geolocation for accurate matching.");
        },
        { enableHighAccuracy: true }
      );
    } else {
      setUserLocation({ lat: -7.9826, lng: 112.6304 });
      setScanStatus("Geolocation not supported. Using default.");
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedSlugForUpload || !e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    const slug = selectedSlugForUpload;
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (event.target?.result) {
        const base64 = event.target.result as string;
        localStorage.setItem(`malang_stamp_photo_${slug}`, base64);
        setLocalPhotos(prev => ({ ...prev, [slug]: base64 }));

        setScanStatus("Analyzing photo with Visual AI...");
        const verif = await verifyLandmarkImage(slug, base64, file.name);
        setVerifications(prev => ({ ...prev, [slug]: verif }));
        localStorage.setItem(`malang_stamp_verif_${slug}`, JSON.stringify(verif));

        const targetName = STAMP_LOCATIONS.find(l => l.slug === slug)?.name;
        if (verif.isVerified) {
          setScanStatus(`Photo Verified for ${targetName}! (${Math.round(verif.confidence)}% Match)`);
        } else {
          setScanStatus(`Photo Warning for ${targetName}: ${verif.reason}`);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleStampLocation = (slug: string) => {
    if (unlocked.includes(slug)) return;
    
    const loc = STAMP_LOCATIONS.find(l => l.slug === slug);
    if (!loc || !userLocation) return;

    // 1. Photo presence check
    if (!localPhotos[slug]) {
      setScanStatus(`Verification failed: Upload a photo of ${loc.name} first.`);
      return;
    }

    // 2. Visual AI Photo verification check
    const verif = verifications[slug];
    if (verif && !verif.isVerified) {
      setScanStatus(`Verification failed: Photo does not match ${loc.name} features (${verif.reason}).`);
      return;
    }

    // 3. Proximity distance check (within 2.0 km)
    const dist = getDistanceKm(userLocation.lat, userLocation.lng, loc.lat, loc.lng);
    if (dist > 2.0) {
      setScanStatus(`Verification failed: You are ${dist.toFixed(1)} km away. Must be within 2.0 km of ${loc.name}.`);
      return;
    }

    const updated = [...unlocked, slug];
    setUnlocked(updated);
    localStorage.setItem("malang_unlocked_stamps", JSON.stringify(updated));
    setScanStatus(`Success! Verified & Stamp collected for ${loc.name}!`);
  };

  const handleDeletePhoto = (slug: string) => {
    if (window.confirm("Delete photo for this location? This will also lock the stamp if already verified.")) {
      localStorage.removeItem(`malang_stamp_photo_${slug}`);
      localStorage.removeItem(`malang_stamp_verif_${slug}`);
      const updatedPhotos = { ...localPhotos };
      delete updatedPhotos[slug];
      setLocalPhotos(updatedPhotos);

      const updatedVerifs = { ...verifications };
      delete updatedVerifs[slug];
      setVerifications(updatedVerifs);

      const updatedStamps = unlocked.filter(s => s !== slug);
      setUnlocked(updatedStamps);
      localStorage.setItem("malang_unlocked_stamps", JSON.stringify(updatedStamps));
      setScanStatus("Photo deleted and stamp locked.");
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear your stamp booklet? All verified stamps and custom pictures will be reset.")) {
      setUnlocked([]);
      localStorage.setItem("malang_unlocked_stamps", JSON.stringify([]));
      STAMP_LOCATIONS.forEach(loc => {
        localStorage.removeItem(`malang_stamp_photo_${loc.slug}`);
        localStorage.removeItem(`malang_stamp_verif_${loc.slug}`);
      });
      setLocalPhotos({});
      setVerifications({});
      setScanStatus("Passport stamp booklet cleared.");
    }
  };

  // Sort locations by distance if coordinates are available
  const sortedLocations = [...STAMP_LOCATIONS].map(loc => {
    const dist = userLocation 
      ? getDistanceKm(userLocation.lat, userLocation.lng, loc.lat, loc.lng) 
      : 9999;
    return { ...loc, distance: dist };
  }).sort((a, b) => a.distance - b.distance);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-3xl bg-[#faf8f5] text-black rounded-3xl overflow-hidden shadow-2xl border border-black/10 flex flex-col h-[90vh]"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-black/[0.08] flex items-center justify-between bg-black/[0.01]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#7a9e64]/10 flex items-center justify-center text-[#7a9e64]">
                  <FontAwesomeIcon icon={faCompass} />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-wider text-black">
                    Stamp booklet
                  </h3>
                  <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">
                    GPS & Photo Verification Souvenir
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-black/10 hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <FontAwesomeIcon icon={faXmark} className="text-xs" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div data-lenis-prevent="true" className="flex-1 overflow-y-auto [overscroll-behavior:contain] p-6 space-y-6">
              <div className="bg-[#7a9e64]/5 border border-[#7a9e64]/15 rounded-2xl p-5 flex flex-col gap-4">
                <div className="text-xs font-semibold text-black/60 leading-relaxed">
                  Verify your visits around Malang. To stamp a location, you must be within <strong className="text-black">2.0 km</strong> of the landmark and upload/snap a photo of the place.
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                  <button
                    onClick={getCurrentCoordinates}
                    className="px-5 py-3 bg-[#7a9e64] hover:bg-[#668753] text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faLocationCrosshairs} />
                    Refresh Coordinates
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-black/45 uppercase tracking-wider whitespace-nowrap">
                      Simulate Location:
                    </span>
                    <select
                      value={simulatedSlug}
                      onChange={(e) => setSimulatedSlug(e.target.value)}
                      className="text-xs bg-white border border-black/10 px-3 py-2 rounded-xl focus:outline-none font-medium cursor-pointer"
                    >
                      <option value="none">Real Geolocation</option>
                      {STAMP_LOCATIONS.map(loc => (
                        <option key={loc.slug} value={loc.slug}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {scanStatus && (
                  <div className={`p-3 rounded-xl text-xs font-semibold border ${
                    scanStatus.includes("Success") 
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700" 
                      : scanStatus.includes("failed")
                      ? "bg-rose-500/10 border-rose-500/20 text-rose-700"
                      : "bg-black/[0.03] border-black/10 text-black/60"
                  }`}>
                    {scanStatus}
                  </div>
                )}
              </div>

              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/*"
                className="hidden"
              />

              {/* Dynamic Stamps List */}
              <h4 className="text-xs font-bold text-black/50 uppercase tracking-wider">
                Landmarks (Sorted by proximity)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sortedLocations.map(loc => {
                  const isUnlocked = unlocked.includes(loc.slug);
                  const distanceText = loc.distance === 9999 
                    ? "Calculating..." 
                    : loc.distance < 1 
                    ? `${Math.round(loc.distance * 1000)} meters away` 
                    : `${loc.distance.toFixed(1)} km away`;

                  const hasPhoto = !!localPhotos[loc.slug];
                  const verif = verifications[loc.slug];
                  const isDistanceValid = loc.distance <= 2.0;
                  const isPhotoValid = hasPhoto && (verif ? verif.isVerified : true);
                  const canStamp = isDistanceValid && isPhotoValid;

                  return (
                    <div
                      key={loc.slug}
                      className="border border-black/[0.08] bg-white p-4 rounded-2xl flex gap-4 items-center justify-between hover:border-black/15 transition-all"
                    >
                      {/* Left: Custom Stamped Photo Graphic */}
                      <div className="relative w-20 h-20 shrink-0 bg-black/5 rounded-xl overflow-hidden border border-black/10 flex items-center justify-center">
                        {hasPhoto ? (
                          <img
                            src={localPhotos[loc.slug]}
                            alt="Your visit snapshot"
                            className={`w-full h-full object-cover ${!isUnlocked ? "opacity-60 blur-[0.5px] grayscale" : ""}`}
                          />
                        ) : (
                          <div className="text-black/30 flex flex-col items-center gap-1">
                            <FontAwesomeIcon icon={faCamera} className="text-lg" />
                            <span className="text-[7px] font-bold uppercase tracking-wider">No Photo</span>
                          </div>
                        )}

                        {/* Ink Stamp Overlay on top of custom photo */}
                        {isUnlocked && (
                          <div className="absolute inset-0 bg-emerald-600/10 border-4 border-double border-emerald-600/75 rounded-xl flex flex-col items-center justify-center text-emerald-700 font-mono text-[7px] font-black uppercase tracking-tighter leading-none select-none rotate-[-8deg] scale-90">
                            <FontAwesomeIcon icon={loc.icon} className="text-xs mb-0.5" />
                            <span className="text-[5px]">VISITED</span>
                          </div>
                        )}
                      </div>

                      {/* Middle: Details & Verification Badges */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <h5 className="text-xs font-bold text-black uppercase truncate">
                            {loc.name}
                          </h5>
                          {isUnlocked && (
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center shrink-0">
                              <FontAwesomeIcon icon={faCheck} className="text-[7px]" />
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-black/40 uppercase font-bold tracking-wider truncate mb-1.5">
                          {loc.description}
                        </p>

                        {/* Dual Verification Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider">
                          {/* GPS Badge */}
                          <span className={`px-1.5 py-0.5 rounded border ${
                            isDistanceValid 
                              ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' 
                              : 'bg-amber-500/10 text-amber-700 border-amber-500/20'
                          }`}>
                            📍 {distanceText}
                          </span>

                          {/* Photo Verification Badge */}
                          {hasPhoto && verif && (
                            <span className={`px-1.5 py-0.5 rounded border ${
                              verif.isVerified 
                                ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' 
                                : 'bg-rose-500/10 text-rose-700 border-rose-500/20'
                            }`} title={verif.reason}>
                              🖼️ {verif.isVerified ? `AI Match (${Math.round(verif.confidence)}%)` : 'AI Warning'}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right: Upload and Verification Buttons */}
                      <div className="flex flex-col gap-2 shrink-0">
                        {!hasPhoto ? (
                          <button
                            onClick={() => {
                              setSelectedSlugForUpload(loc.slug);
                              setTimeout(() => fileInputRef.current?.click(), 100);
                            }}
                            className="px-3 py-2 bg-white hover:bg-black/5 border border-black/15 text-black text-[10px] font-black uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faUpload} />
                            Add Photo
                          </button>
                        ) : (
                          <div className="flex gap-1.5">
                            <button
                              onClick={() => handleDeletePhoto(loc.slug)}
                              className="w-8 h-8 bg-rose-500/5 hover:bg-rose-500/10 text-rose-600 rounded-xl flex items-center justify-center transition-all border border-rose-500/10 cursor-pointer"
                              title="Delete Photo"
                            >
                              <FontAwesomeIcon icon={faTrash} className="text-[10px]" />
                            </button>

                            {!isUnlocked && (
                              <button
                                onClick={() => handleStampLocation(loc.slug)}
                                className={`px-3 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
                                  canStamp 
                                    ? 'bg-[#7a9e64] hover:bg-[#668753] text-white shadow-sm' 
                                    : 'bg-black/5 border border-black/10 text-black/30 cursor-not-allowed'
                                }`}
                                disabled={!canStamp}
                              >
                                Stamp
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-black/[0.08] flex items-center justify-between bg-black/[0.01]">
              <span className="text-xs font-bold text-black/45 uppercase tracking-wider">
                Stamps Collected: {unlocked.length} / {STAMP_LOCATIONS.length} Places
              </span>
              
              {(unlocked.length > 0 || Object.keys(localPhotos).length > 0) && (
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 border border-red-500/20 hover:bg-red-500/5 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                >
                  Reset Passport
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
