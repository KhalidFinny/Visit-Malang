import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { SkeletonProps, ImageWithSkeletonProps } from "./types";

export function Skeleton({
  className = "",
  aspectW,
  aspectH,
  rounded = "rounded-xl",
}: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#1a1a1a]/8 ${rounded} ${className}`}
      style={aspectW && aspectH ? { aspectRatio: `${aspectW} / ${aspectH}` } : undefined}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function ImageWithSkeleton({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  loading = "lazy",
  fetchPriority = "auto",
}: ImageWithSkeletonProps) {
  // Start as loaded (hide skeleton). Only show skeleton if onLoad hasn't fired.
  const [loaded, setLoaded] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    setShowSkeleton(false);
  }, []);

  // On mount / src change: if image loads instantly, keep skeleton hidden.
  // If not loaded after one frame, show skeleton until onLoad fires.
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
      setShowSkeleton(false);
      return;
    }
    // Image not immediately ready — wait one frame, then show skeleton if still not loaded
    const raf = requestAnimationFrame(() => {
      if (!imgRef.current?.complete) {
        setShowSkeleton(true);
        setLoaded(false);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {showSkeleton && !loaded && (
        <Skeleton className="absolute inset-0 w-full h-full z-10" rounded="inherit" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${className} ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onLoad={handleLoad}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}
