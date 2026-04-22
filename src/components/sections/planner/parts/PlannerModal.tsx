import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface PlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function PlannerModal({ isOpen, onClose, children }: PlannerModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex"
        >
          {/* Full-screen backdrop — click to close */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Panel slides in from right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 280 }}
            className="relative ml-auto w-full max-w-2xl h-full bg-[#0e0e0e] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/[0.06] shrink-0">
              <span className="text-swiss text-[10px] font-black uppercase tracking-[0.3em] text-white/25">
                Regional Counsel
              </span>
              <button
                onClick={onClose}
                className="text-white/30 hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
              >
                Close
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
