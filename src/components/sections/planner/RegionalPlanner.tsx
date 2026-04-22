import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { BudgetTier, EconomyOrigin } from "./types";
import { ECONOMIES, generateAdvice } from "./utils/PlannerLogic";
import PlannerInputs from "./parts/PlannerInputs.tsx";
import PlannerAdviceCard from "./parts/PlannerAdviceCard.tsx";
import PlannerTeaser from "./parts/PlannerTeaser.tsx";
import PlannerModal from "./parts/PlannerModal.tsx";

export default function RegionalPlanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budget, setBudget] = useState<BudgetTier>("balanced");
  const [origin, setOrigin] = useState<EconomyOrigin>(ECONOMIES[0]);
  const [hasRecommendation, setHasRecommendation] = useState(false);

  const weather = "Overcast";
  const timeOfDay = "Afternoon";

  const advice = useMemo(() =>
    generateAdvice(budget, origin, weather, timeOfDay),
    [budget, origin, weather, timeOfDay]
  );

  function handleClose() {
    setIsModalOpen(false);
    setHasRecommendation(false);
  }

  return (
    <>
      <PlannerTeaser onOpen={() => setIsModalOpen(true)} />

      <PlannerModal isOpen={isModalOpen} onClose={handleClose}>
        <AnimatePresence mode="wait">
          {!hasRecommendation ? (
            /* ── STATE 1: Setup ── */
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28 }}
              className="flex flex-col h-full px-8 py-8 gap-8"
            >
              {/* Heading */}
              <div>
                <h2 className="text-editorial text-6xl text-white leading-none tracking-tighter mb-2">
                  Plan<br />Your Trip
                </h2>
                <p className="text-swiss text-xs text-white/25 uppercase tracking-[0.25em]">
                  Set your context below
                </p>
              </div>

              {/* Live context pills */}
              <div className="flex gap-2">
                <div className="px-3 py-2 rounded-md bg-white/5 border border-white/[0.08]">
                  <span className="text-[9px] font-black text-white/25 uppercase block">Weather</span>
                  <span className="text-white text-sm font-semibold">{weather}</span>
                </div>
                <div className="px-3 py-2 rounded-md bg-white/5 border border-white/[0.08]">
                  <span className="text-[9px] font-black text-white/25 uppercase block">Time</span>
                  <span className="text-white text-sm font-semibold">{timeOfDay}</span>
                </div>
              </div>

              {/* Inputs */}
              <PlannerInputs
                budget={budget}
                setBudget={setBudget}
                origin={origin}
                setOrigin={setOrigin}
              />

              {/* CTA */}
              <button
                onClick={() => setHasRecommendation(true)}
                className="mt-auto w-full py-4 bg-white text-black font-black text-xs uppercase tracking-[0.35em] hover:bg-white/90 active:scale-[0.98] transition-all"
              >
                Generate Counsel →
              </button>
            </motion.div>
          ) : (
            /* ── STATE 2: Result ── */
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28 }}
              className="flex flex-col h-full"
            >
              {/* Advice area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${budget}-${origin.code}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1"
                >
                  <PlannerAdviceCard advice={advice} origin={origin} />
                </motion.div>
              </AnimatePresence>

              {/* Bottom strip: adjustments */}
              <div className="px-8 py-5 border-t border-white/[0.06] shrink-0 flex items-center justify-between gap-6">
                <PlannerInputs
                  budget={budget}
                  setBudget={setBudget}
                  origin={origin}
                  setOrigin={setOrigin}
                  compact
                />
                <button
                  onClick={() => setHasRecommendation(false)}
                  className="shrink-0 text-[10px] text-white/25 uppercase tracking-widest hover:text-white/50 transition-colors whitespace-nowrap"
                >
                  ← Reset
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PlannerModal>
    </>
  );
}
