import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heritageFacts = [
  {
    num: "01",
    title: "Parijs van Oost-Java",
    description: "During the colonial era, Malang was titled 'The Paris of East Java' due to its cool mountainous air and well-planned European-style architecture, designed as a luxury retreat for the elite.",
    tag: "History"
  },
  {
    num: "02",
    title: "Boso Walikan Slang",
    description: "Malang has a unique linguistic culture called 'Boso Walikan,' where words are spoken backwards. It was originally used by local fighters to confuse Dutch colonizers during the independence struggle.",
    tag: "Culture"
  },
  {
    num: "03",
    title: "Singosari Majesty",
    description: "Before the colonial arrival, Malang was the seat of the powerful Singosari Kingdom in the 13th century. Ancient temples like Candi Singosari still stand as silent witnesses to this golden era.",
    tag: "Origins"
  },
  {
    num: "04",
    title: "The Apple Capital",
    description: "Malang is famous as the apple producing center of Indonesia. The cool climate of the surrounding Batu highlands makes it the only place in the country where various apple varieties thrive.",
    tag: "Economy"
  },
  {
    num: "05",
    title: "Thomas Karsten's Legacy",
    description: "The Ijen Boulevard district remains one of Indonesia's most preserved examples of 1920s 'Indo-European' urban design by Herman Thomas Karsten, featuring wide boulevards and distinctive villas.",
    tag: "Architecture"
  },
  {
    num: "06",
    title: "The Mask Tradition",
    description: "'Topeng Malangan' dance masks are carved from local wood, representing a unique 12th-century artistic lineage linking East Java to Majapahit glory through traditional theater.",
    tag: "Arts"
  },
  {
    num: "07",
    title: "City of Education",
    description: "Home to over 50 higher education institutions, Malang has been a regional center for knowledge and student life since the early 1900s, earning its reputation as 'Kota Pendidikan'.",
    tag: "Society"
  },
  {
    num: "08",
    title: "Alun-Alun Tugu",
    description: "The city's famous circular park features a historic monument surrounded by a lotus pond, symbolizing Indonesia's resilience and independence at the very heart of the city.",
    tag: "Landmark"
  },
  {
    num: "09",
    title: "Candi Badut",
    description: "Standing since 760 AD, Candi Badut is the oldest temple in East Java, proving that Malang was a center of civilization long before the later Majapahit and Singosari empires.",
    tag: "Ancient"
  },
  {
    num: "10",
    title: "Tempo Doeloe",
    description: "Every year, the city's main thoroughfares transform into living history museums, celebrating the 'old world' charm of local colonial life through the Malang Tempo Doeloe festival.",
    tag: "Festivals"
  }
];

export default function HeritageStage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heritageFacts.length);
    }, 15000); // 15 seconds cycle
    return () => clearInterval(timer);
  }, []);

  const activeFact = heritageFacts[index];

  return (
    <motion.section 
      className="relative w-full bg-colonial-cream py-40 min-h-[800px] flex items-center overflow-hidden"
    >
      <div className="swiss-container">
        {/* Editorial Section Metadata */}
        <div className="flex items-start justify-between mb-32 border-b-2 border-premium-black/20 pb-10">
          <div className="flex flex-col gap-3">
            <span className="text-swiss text-sm font-black tracking-[0.5em] text-premium-black uppercase opacity-70">
              Folio Section
            </span>
            <span className="text-swiss text-3xl font-black text-premium-black uppercase tracking-tight">
              02 / FunFact
            </span>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-swiss text-sm tracking-widest text-premium-black/60 uppercase font-black block mb-2">
              Malang, East Java
            </span>
            <span className="text-swiss text-sm tracking-widest text-premium-black/60 uppercase font-black">
              Established c. 1260
            </span>
          </div>
        </div>

        {/* Premium Editorial Fact Card */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-6xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center"
              >
                {/* Left: Metadata & Tag */}
                <div className="md:col-span-3 flex flex-col gap-8">
                  <div className="flex flex-col">
                    <span className="text-swiss text-[10rem] font-thin text-premium-black/10 leading-none -ml-6">
                      {activeFact.num}
                    </span>
                    <span className="text-swiss text-sm tracking-[0.6em] font-black uppercase text-premium-black ml-2">
                      {activeFact.tag}
                    </span>
                  </div>
                </div>

                {/* Right: The Fact Content */}
                <div className="md:col-span-9 border-l-2 border-premium-black/10 pl-16 md:pl-24">
                  <motion.h3 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-editorial text-[clamp(3.5rem,7vw,6.5rem)] text-premium-black leading-[0.85] tracking-tight mb-12"
                  >
                    {activeFact.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-swiss text-3xl md:text-4xl text-premium-black leading-[1.4] font-bold max-w-3xl"
                  >
                    {activeFact.description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Minimal Editorial Progress Line */}
            <div className="mt-32 h-[2px] bg-premium-black/10 w-full relative">
              <motion.div 
                key={index}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 15, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-premium-black/40 w-full origin-left"
              />
            </div>
          </div>
        </div>

        {/* Ambient Typography Background */}
        <div className="absolute bottom-0 right-0 translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="text-editorial text-[45rem] font-black text-premium-black leading-none">
            ARCHIVE
          </span>
        </div>
      </div>

    </motion.section>
  );
}
