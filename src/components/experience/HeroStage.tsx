import { motion } from "framer-motion";
import tuguMalang from "../../assets/images/tugu-malang.png";

export default function HeroStage() {
  return (
    <motion.div
      key="hero"
      className="hero-stage"
      initial={{ opacity: 0, y: -20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="hero-content-wrap">
        <motion.h1
          className="hero-main-title"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          MALANG
        </motion.h1>
        <motion.div
          className="hero-city-card"
          initial={{ y: 120, opacity: 0, scale: 0.94 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img src={tuguMalang} className="hero-city-img" alt="Tugu Malang" />
        </motion.div>
        <motion.p
          className="hero-malang-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          Heart of East Java
        </motion.p>
      </div>
    </motion.div>
  );
}
