import { motion } from "framer-motion";

export default function DiscoverStage() {
  return (
    <section className="relative w-full min-h-screen bg-heritage-sage flex flex-col items-center justify-center py-32 px-8">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-['Vina_Sans'] text-6xl md:text-8xl text-[#1e293b] tracking-wider uppercase"
        >
          DISCOVER THE HERITAGE
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-[#334155] text-xl md:text-2xl leading-relaxed font-light"
        >
          Nestled in the highlands of East Java, Malang seamlessly blends cool mountain air with rich colonial history. Explore ancient temples, vibrant colorful villages, and the majestic volcanic landscapes that surround this timeless city.
        </motion.p>
      </div>
    </section>
  );
}
