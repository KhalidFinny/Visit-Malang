import { motion } from "framer-motion";

interface PlannerTeaserProps {
  onOpen: () => void;
}

export default function PlannerTeaser({ onOpen }: PlannerTeaserProps) {
  return (
    <section 
      className="relative w-full h-[80vh] md:h-screen overflow-hidden cursor-pointer group"
      onClick={onOpen}
    >
      {/* 1. Iconic Bromo Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Mt. Bromo Landscape" 
          className="w-full h-full object-cover"
        />
        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="swiss-container relative h-full flex flex-col justify-center items-start z-10 pt-20">
        {/* Top Text: Script Style */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-script text-white text-5xl md:text-8xl leading-none mb-6 opacity-90"
        >
          Not sure where to start?
        </motion.h2>

        {/* Mid Text: Urbanist (Swiss) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-swiss text-white/80 text-xl md:text-3xl font-light max-w-2xl leading-relaxed mb-12"
        >
          Tell us your budget and what kind of vibe you're looking for, 
          we'll help you plan your trip
        </motion.p>

        {/* Large CTA: Vina Sans (Editorial) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-20 right-10 md:right-20 flex flex-col items-end"
        >
          <div className="relative group/cta">
            <h3 className="text-editorial text-[8rem] md:text-[14rem] text-white leading-[0.7] select-none">
              PLAN
              <br />
              MY TRIP
            </h3>
            
            {/* The Custom Bent Arrow SVG */}
            <div className="absolute -left-12 bottom-6 md:-left-20 md:bottom-12">
              <svg 
                width="80" 
                height="80" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white opacity-80 md:w-32 md:h-32"
              >
                <path 
                  d="M20 20V70H75" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="square"
                />
                <path 
                  d="M60 55L75 70L60 85" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Gradients */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-heritage-sage/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-petal-blush/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
