import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroStage() {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: heroRef,
    offset: ["start start", "end end"]
  });
  
  const tuguScale = useTransform(scrollYProgress, [0, 1], [1.3, 1.05]);
  
  const tuguY = useTransform(scrollYProgress, [0, 1], ["60vh", "0vh"]);

  const fadeOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  const skyScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.15]);

  return (
    <motion.section 
      ref={heroRef}
      className="relative w-full h-[200vh] bg-midnight-steel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
          {/* Parallax Sky Background */}
          <motion.img
            src="/sky.webp"
            loading="lazy"
            alt="Malang overcast sky background"
            style={{ scale: skyScale }}
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none origin-top"
          />
          
          {/* Color Grading Overlay to integrate sky with color palette */}
          <div className="absolute inset-0 bg-midnight-steel/20 mix-blend-overlay z-1 pointer-events-none" />

          {/* Typography container with stagger animation */}
          <motion.div 
            className="absolute inset-x-0 top-[10vh] md:top-[12vh] flex flex-col items-center z-10 pointer-events-none select-none"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <div className="flex flex-col items-start w-fit mx-auto">
              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="font-['Vina_Sans'] text-3xl md:text-5xl text-white tracking-widest uppercase -mb-4 md:-mb-8 pl-1 z-10"
              >
                welcome to beautiful
              </motion.span>
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
                  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-['Vina_Sans'] text-[32vw] leading-[0.75] text-white drop-shadow-2xl"
              >
                MALANG
              </motion.h1>
            </div>
          </motion.div>

          {/* Tugu Monument Scroll Animation */}
          <motion.img
            src="/tugu.webp"
            loading="lazy"
            alt="Tugu Malang Monument"
            style={{ 
              scale: tuguScale,
              y: tuguY,
              transformOrigin: "top center" 
            }}
            className="absolute inset-x-0 bottom-0 mx-auto w-full h-[160vh] object-cover object-top z-20 pointer-events-none"
          />

          {/* Base fade transition */}
          <motion.div 
            style={{ opacity: fadeOpacity }}
            className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-midnight-steel to-transparent z-30 pointer-events-none" 
          />
        </div>
    </motion.section>
  );
}
