import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TechEntrance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F2E9E4] py-32 border-t border-black/5 overflow-hidden">
      <div className="swiss-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          <div className="max-w-4xl">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-editorial text-6xl md:text-8xl text-[#0A0A0A] leading-[0.8] tracking-tighter uppercase mb-8"
            >
              <span className="block">Sinergi Teknologi</span>
              <span className="block">Malang Raya</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-swiss text-[#0A0A0A]/60 leading-relaxed text-sm md:text-base max-w-lg"
            >
              Sebuah simfoni antara pendidikan, kreativitas, dan teknologi yang tumbuh bersama di jantung Jawa Timur.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center md:items-end gap-8"
          >
            <div className="relative group cursor-pointer" onClick={() => navigate("/modern-malang")}>
              <div className="absolute inset-0 bg-[#A3B18A] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <button className="relative px-12 py-6 bg-[#0A0A0A] text-white text-xs font-black uppercase tracking-[0.4em] rounded-full hover:bg-[#4A5759] transition-all duration-500 whitespace-nowrap shadow-xl">
                Explore the Future
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechEntrance;





