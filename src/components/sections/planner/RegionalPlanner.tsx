import { useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import type { BudgetTier, EconomyOrigin } from "./types";
import { ECONOMIES, generateAdvice } from "./utils/PlannerLogic";
import PlannerInputs from "./parts/PlannerInputs";
import PlannerAdviceCard from "./parts/PlannerAdviceCard";
import PlannerTeaser from "./parts/PlannerTeaser";
import PlannerModal from "./parts/PlannerModal";

const MONTH_KEYS = [
  'months.january', 'months.february', 'months.march', 'months.april',
  'months.may', 'months.june', 'months.july', 'months.august',
  'months.september', 'months.october', 'months.november', 'months.december'
];

export default function RegionalPlanner() {
  const { t } = useTranslation();
  const MONTHS = MONTH_KEYS.map(key => t(key));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budget, setBudget] = useState<BudgetTier>("balanced");
  const [origin, setOrigin] = useState<EconomyOrigin>(ECONOMIES[0]);
  const [hasRecommendation, setHasRecommendation] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [refreshSeed, setRefreshSeed] = useState(42);
  
  // Wizard step state
  const [step, setStep] = useState(1);

  const seasonInfo = useMemo(() => {
    const month = selectedMonth + 1;
    const isWet = [11, 12, 1, 2, 3, 4].includes(month);
    return {
      type: isWet ? "wet" as const : "dry" as const,
      label: isWet ? t('planner.season.wet') : t('planner.season.dry'),
      status: isWet ? t('planner.season.rainyLush') : t('planner.season.sunnyClear')
    };
  }, [selectedMonth]);

  const advice = useMemo(() =>
    generateAdvice(
      budget,
      origin,
      seasonInfo.type === "wet" ? t('planner.season.rainy') : t('planner.season.clear'),
      t('planner.timeOfDay.day'),
      refreshSeed
    ),
    [budget, origin, seasonInfo, refreshSeed]
  );

  function handleClose() {
    setIsModalOpen(false);
    setHasRecommendation(false);
    setRefreshSeed(42);
    setStep(1);
  }

  function handleGenerate() {
    setHasRecommendation(true);
  }

  return (
    <>
      <PlannerTeaser onOpen={() => setIsModalOpen(true)} />

      <PlannerModal isOpen={isModalOpen} onClose={handleClose}>
        <AnimatePresence mode="wait">
          {!hasRecommendation ? (
            /* ── SETUP VIEW (Wizard Flow) ── */
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col min-h-0"
            >
              {/* Setup header */}
              <div className="px-4 sm:px-8 pt-6 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-black leading-snug">
                      {t('planner.modal.title')}
                    </h2>
                    <p className="text-sm text-black/45 font-normal mt-1">
                      {t('planner.modal.subtitle')}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5 bg-black/[0.04] border border-black/[0.07] px-3 py-1.5 rounded-full mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7a9e64] animate-pulse" />
                    <span className="text-[11px] font-semibold text-black/50 uppercase tracking-wide whitespace-nowrap">
                      {seasonInfo.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Inputs content (Current step only) */}
              <div className="px-4 sm:px-8 pb-4 flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <PlannerInputs
                      budget={budget}
                      setBudget={setBudget}
                      origin={origin}
                      setOrigin={setOrigin}
                      selectedMonth={selectedMonth}
                      setSelectedMonth={setSelectedMonth}
                      monthsList={MONTHS}
                      step={step}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Wizard Nav CTA Buttons */}
              <div className="sticky bottom-0 px-4 sm:px-8 py-4 bg-white border-t border-black/[0.06] flex items-center gap-3">
                {step > 1 && (
                  <button
                    onClick={() => setStep(prev => prev - 1)}
                    className="px-6 py-3.5 bg-black/[0.04] hover:bg-black/[0.08] text-black text-base font-semibold rounded-2xl transition-all cursor-pointer"
                  >
                    Back
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    onClick={() => setStep(prev => prev + 1)}
                    className="flex-1 py-3.5 bg-black hover:bg-[#7a9e64] text-white text-base font-semibold rounded-2xl transition-all cursor-pointer"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    onClick={handleGenerate}
                    className="flex-1 py-3.5 bg-[#7a9e64] hover:bg-[#668753] text-white text-base font-semibold rounded-2xl transition-all cursor-pointer"
                  >
                    {t('planner.modal.generate')}
                  </button>
                )}
              </div>
            </motion.div>

          ) : (
            /* ── RESULTS VIEW ── */
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col min-h-0"
            >
              {/* Results */}
              <PlannerAdviceCard advice={advice} origin={origin} />

              {/* Sticky action bar */}
              <div className="sticky bottom-0 px-4 sm:px-8 py-4 bg-white border-t border-black/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex-1 overflow-x-auto">
                  <PlannerInputs
                    budget={budget}
                    setBudget={setBudget}
                    origin={origin}
                    setOrigin={setOrigin}
                    selectedMonth={selectedMonth}
                    setSelectedMonth={setSelectedMonth}
                    monthsList={MONTHS}
                    compact
                  />
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setRefreshSeed(prev => prev + 1)}
                    className="flex-1 sm:flex-none px-5 py-3 text-base font-semibold text-[#4e6b38] bg-[#7a9e64]/10 border border-[#7a9e64]/30 rounded-xl hover:bg-[#7a9e64]/20 transition-all cursor-pointer whitespace-nowrap"
                  >
                    {t('planner.modal.refresh')}
                  </button>
                  <button
                    onClick={() => {
                      setHasRecommendation(false);
                      setStep(1); // Reset back to step 1 of inputs
                    }}
                    className="flex-1 sm:flex-none px-5 py-3 text-base font-semibold text-black/50 bg-black/[0.04] border border-black/[0.07] rounded-xl hover:text-black hover:bg-black/[0.07] transition-all cursor-pointer whitespace-nowrap"
                  >
                    {t('planner.modal.editPlan')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PlannerModal>
    </>
  );
}
