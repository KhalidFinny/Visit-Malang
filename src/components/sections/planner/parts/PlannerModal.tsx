import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLock } from "../../../hooks/useScrollLock";
import type { PlannerModalProps } from "../types";

export default function PlannerModal({ isOpen, onClose, children }: PlannerModalProps) {
  const { t } = useTranslation();

  useScrollLock(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="planner-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="relative z-10 w-full sm:w-[92vw] md:w-[85vw] max-w-[960px] h-[92dvh] sm:h-auto sm:max-h-[88vh] bg-[#f5f4f0] rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Handle (mobile) */}
            <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-black/15" />
            </div>

            {/* Header */}
            <div className="shrink-0 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 border-b border-black/[0.06] bg-[#f5f4f0]">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-black leading-snug">
                  {t('planner.modal.title')}
                </h2>
                <p className="text-sm text-black/45 font-normal mt-0.5">
                  {t('planner.modal.subtitle')}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 transition-colors cursor-pointer shrink-0 ml-4"
                aria-label={t('planner.modal.close')}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div 
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto min-h-0 modal-scrollable-content [overscroll-behavior:contain]"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
