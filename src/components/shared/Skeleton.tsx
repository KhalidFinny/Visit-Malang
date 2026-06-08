import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
 * Generic Skeleton Placeholder
 * ───────────────────────────────────────────── */
interface SkeletonProps {
  className?: string;
  /** Aspect ratio width (e.g. 16 for 16/9). Omit for auto */
  aspectW?: number;
  /** Aspect ratio height (e.g. 9 for 16/9) */
  aspectH?: number;
  rounded?: string;
}

export function Skeleton({
  className = "",
  aspectW,
  aspectH,
  rounded = "rounded-xl",
}: SkeletonProps) {
  const aspectStyle =
    aspectW && aspectH
      ? ({ aspectRatio: `${aspectW} / ${aspectH}` } as React.CSSProperties)
      : {};

  return (
    <div
      className={`relative overflow-hidden bg-[#1a1a1a]/8 ${rounded} ${className}`}
      style={aspectStyle}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
 * Image With Skeleton — shows shimmer while img loads
 * ───────────────────────────────────────────── */
interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export function ImageWithSkeleton({
  src,
  alt,
  className = "",
  wrapperClassName = "",
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number>(0);

  const handleLoad = useCallback(() => {
    // small delay so cached images still show skeleton briefly for consistency
    const start = performance.now();
    const poll = () => {
      if (performance.now() - start >= 200) {
        setLoaded(true);
      } else {
        rafRef.current = requestAnimationFrame(poll);
      }
    };
    rafRef.current = requestAnimationFrame(poll);
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Reset when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Skeleton — hidden once loaded or errored */}
      {!loaded && !error && (
        <Skeleton className="absolute inset-0 w-full h-full z-10" rounded="inherit" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${className} ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={handleLoad}
        onError={() => {
          setError(true);
          setLoaded(true); // reveal broken image too
        }}
      />
    </div>
  );
}
