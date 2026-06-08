import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function DiscoverStage() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-colonial-cream flex flex-col items-center justify-center py-40 px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-editorial text-6xl md:text-8xl text-midnight-steel tracking-wider text-balance"
        >
          {t('discover.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-swiss text-midnight-steel/80 text-xl md:text-2xl leading-relaxed font-light"
        >
          {t('discover.description')}
        </motion.p>
      </div>
    </section>
  );
}
