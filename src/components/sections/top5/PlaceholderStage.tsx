import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function PlaceholderStage() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full min-h-screen bg-colonial-cream flex flex-col items-center justify-center p-8 py-40">
      <div className="max-w-4xl mx-auto text-center border-2 border-dashed border-midnight-steel/10 p-12 md:p-20 rounded-none">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-editorial text-5xl md:text-7xl text-midnight-steel tracking-wider mb-8"
        >
          {t('top5.placeholder.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-swiss text-midnight-steel/60 text-2xl font-light"
        >
          {t('top5.placeholder.description')}
        </motion.p>
      </div>
    </section>
  );
}
