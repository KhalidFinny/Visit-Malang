import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode, useEffect } from "react";

interface PlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function PlannerModal({ isOpen, onClose, children }: PlannerModalProps) {
  const { t } = useTranslation();
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="planner-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-10"
        >
          <div className="absolute inset-0 bg-[#1a1a1a]/40 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.97, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.97, opacity: 0, y: 12 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full max-w-[1400px] max-h-[92vh] bg-[#f5f4f0] border border-[#1a1a1a]/8 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="shrink-0 flex items-center justify-between px-8 py-5 bg-white border-b border-[#1a1a1a]/8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-heritage-sage" />
                <span className="font-sans text-[14px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/60">
                  {t('planner.modal.regionalCounsel')}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 hover:text-[#1a1a1a] border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/25 px-5 py-2.5 rounded-lg transition-all"
              >
                {t('planner.modal.close')}
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto scrollbar-transparent min-h-0">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
