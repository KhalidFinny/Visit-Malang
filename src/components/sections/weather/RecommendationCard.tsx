import { motion } from "framer-motion";
import type { Recommendation } from "./weatherData";

interface Props {
  recommendation: Recommendation;
  index: number;
}

export default function RecommendationCard({ recommendation, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex-none w-[320px] md:w-[450px] aspect-video rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Background Image */}
      <img 
        src={recommendation.imageUrl} 
        alt={recommendation.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-white/60 text-xs font-light tracking-widest uppercase mb-1">
          {recommendation.category}
        </span>
        <h3 className="font-['Vina_Sans'] text-3xl md:text-5xl text-white mb-2 leading-none">
          {recommendation.name}
        </h3>
        <p className="text-white/80 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
          {recommendation.description}
        </p>
        
        <div className="mt-4 flex items-center gap-2 text-white/40 text-[0.6rem] uppercase tracking-widest font-sans group-hover:text-white/80 transition-colors">
          <span>Explore more</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </div>
      </div>
      
      {/* Glass Border Effect */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </motion.div>
  );
}
