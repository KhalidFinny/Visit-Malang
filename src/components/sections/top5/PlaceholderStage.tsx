import { motion } from "framer-motion";

export default function PlaceholderStage() {
  return (
    <section className="relative w-full min-h-screen bg-heritage-sage flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center border-2 border-dashed border-white/20 p-12 rounded-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-['Vina_Sans'] text-4xl md:text-6xl text-white/50 tracking-wider uppercase mb-6"
        >
          Section 3 Placeholder
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-white/40 text-xl font-light"
        >
          Upcoming content will be placed here.
        </motion.p>
      </div>
    </section>
  );
}
