import { motion } from "framer-motion";

/** A small, minimal SVG icon set inspired by Malang iconography. */
const MOTIFS = [
  {
    // Apple blossom petal — Malang is Indonesia's apple region
    path: "M12 3C8 3 4 7 4 12C4 17 8 21 12 21C16 21 20 17 20 12C20 7 16 3 12 3Z M12 3C12 3 10 1 8 2M12 3C12 3 14 1 16 2",
    x: "6%",
    y: "14%",
    size: 28,
    delay: 0,
  },
  {
    // Coffee cherry — Malang's thriving specialty coffee scene
    path: "M17 10H20C21 10 22 11 22 12V13C22 14 21 15 20 15H17M5 10H17V18C17 19 16 20 15 20H7C6 20 5 19 5 18V10ZM8 7V5M11 7V5M14 7V5",
    x: "84%",
    y: "18%",
    size: 24,
    delay: 0.4,
  },
  {
    // Candi (temple) spire — Singosari, Badut, Kidal
    path: "M12 3L6 9V20H18V9L12 3ZM9 12H15M9 15H15M9 18H15",
    x: "10%",
    y: "72%",
    size: 22,
    delay: 0.8,
  },
  {
    // Mountain peak — Bromo / Semeru
    path: "M2 20L7 10L12 14L17 6L22 20",
    x: "82%",
    y: "68%",
    size: 30,
    delay: 1.2,
  },
  {
    // Batik flower — simplified floral motif
    path: "M12 2C12 2 14 6 18 6C14 6 12 10 12 10C12 10 10 6 6 6C10 6 12 2 12 2ZM12 10V18M8 14H16",
    x: "48%",
    y: "12%",
    size: 18,
    delay: 0.6,
  },
  {
    // Javanese cloud motif (mega mendung inspired)
    path: "M4 16C4 13 6 11 9 11C9 8 12 6 15 8C17 6 20 8 20 11C22 11 23 13 22 15",
    x: "55%",
    y: "78%",
    size: 26,
    delay: 1.0,
  },
];

export default function FloatingDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {MOTIFS.map((motif, i) => (
        <motion.div
          key={i}
          className="absolute text-[#1a1a1a]/10"
          style={{ left: motif.x, top: motif.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.6 + motif.delay,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <svg
            width={motif.size}
            height={motif.size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={motif.path} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
