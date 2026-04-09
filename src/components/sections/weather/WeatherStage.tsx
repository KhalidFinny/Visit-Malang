import { motion } from "framer-motion";
import { malangRecommendations } from "./weatherData";
import RecommendationCard from "./RecommendationCard";

export default function WeatherStage() {
  const date = new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());

  return (
    <section className="relative w-full min-h-screen bg-midnight-steel py-24 md:py-32 flex flex-col justify-center overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial-at-t from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col gap-16 md:gap-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-['Vina_Sans'] text-6xl md:text-9xl text-white leading-[0.85] lowercase"
            >
              today's <br/> weather
            </motion.h2>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-['Outfit'] text-2xl md:text-4xl text-white/50 lowercase mt-4"
            >
              perfect for
            </motion.span>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6 md:gap-12"
          >
            <div className="text-right">
              <div className="font-['Outfit'] text-6xl md:text-8xl text-white font-medium leading-none">22°</div>
              <div className="font-['Outfit'] text-md md:text-xl text-white/40 lowercase mt-2">{date}</div>
            </div>
            
            {/* Vertical Divider */}
            <div className="h-16 md:h-24 w-px bg-white/20" />

            {/* Weather Icon (Cloudy Sun) */}
            <div className="relative">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="md:w-24 md:h-24 text-white">
                {/* Sun */}
                <motion.circle 
                  cx="12" cy="7" r="4" 
                  stroke="currentColor" strokeWidth="1"
                  animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                {/* Rays */}
                <path d="M12 2v1m0 8v1M7 7h-1m10 0h-1M8.5 3.5l.5.5m6 0-.5.5m0 6 .5.5m-6 0-.5.5" stroke="currentColor" strokeWidth="1" />
                
                {/* Cloud Overlay */}
                <motion.path 
                  d="M17.5 19c2.5 0 4.5-2 4.5-4.5S20 10 17.5 10c-.2 0-.4 0-.6.1C16 7.6 13.7 6 11 6c-3.3 0-6 2.7-6 6 0 .3 0 .6.1.9C3.1 13.5 2 15.1 2 17c0 2.2 1.8 4 4 4h11.5c.2 0 .4-.1.6-.2"
                  fill="rgb(74, 87, 89)"
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  initial={{ x: -2 }}
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </motion.div>

        </div>

        {/* Recommendations Grid/Scroll */}
        <div className="w-screen relative -mx-8">
          <div className="overflow-x-auto overflow-y-hidden no-scrollbar flex gap-6 px-8 pb-12">
            {malangRecommendations.map((rec, index) => (
              <RecommendationCard key={rec.id} recommendation={rec} index={index} />
            ))}
          </div>
          
          {/* Subtle scroll progress indicators or gradient masks could go here */}
          <div className="absolute top-0 right-0 h-full w-32 bg-linear-to-l from-midnight-steel to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
