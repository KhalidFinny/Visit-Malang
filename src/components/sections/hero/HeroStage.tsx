import { motion } from "framer-motion";
import { useHeroParallax } from "./hooks/useHeroParallax";
import HeroSky from "./parts/HeroSky";
import HeroContent from "./parts/HeroContent";
import HeroTugu from "./parts/HeroTugu";

export default function HeroStage() {
  const { heroRef, skyScale, tuguScale, tuguY } = useHeroParallax();

  return (
    <motion.section
      ref={heroRef}
      className="relative w-full h-[150vh] bg-colonial-cream"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <HeroSky skyScale={skyScale} />
        <HeroContent />
        <HeroTugu tuguScale={tuguScale} tuguY={tuguY} />
      </div>

      {/* Section-level Static Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-[40vh] bg-linear-to-t from-colonial-cream via-colonial-cream/70 to-transparent z-50 pointer-events-none" />
    </motion.section>
  );
}
