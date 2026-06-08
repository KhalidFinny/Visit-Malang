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
  }

  return (
    <>
      <PlannerTeaser onOpen={() => setIsModalOpen(true)} />

      <PlannerModal isOpen={isModalOpen} onClose={handleClose}>
        <AnimatePresence mode="wait">
          {!hasRecommendation ? (
            /* ── SETUP VIEW ── */
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full min-h-0"
            >
              {/* Setup header strip */}
              <div className="shrink-0 px-8 pt-8 pb-6 border-b border-[#1a1a1a]/8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight leading-none">
                      {t('planner.modal.title')}
                    </h2>
                    <p className="text-[16px] text-[#1a1a1a]/40 font-medium mt-1.5">
                      {t('planner.modal.subtitle')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 bg-[#1a1a1a]/5 border border-[#1a1a1a]/10 px-4 py-2.5 rounded-lg shrink-0">
                    <div className="w-2 h-2 rounded-full bg-heritage-sage animate-pulse" />
                    <span className="text-[14px] font-bold text-[#1a1a1a]/70 uppercase tracking-wide">
                      {seasonInfo.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Inputs */}
              <div className="flex-1 px-8 py-8 overflow-y-auto scrollbar-transparent min-h-0">
                <PlannerInputs
                  budget={budget}
                  setBudget={setBudget}
                  origin={origin}
                  setOrigin={setOrigin}
                  selectedMonth={selectedMonth}
                  setSelectedMonth={setSelectedMonth}
                  monthsList={MONTHS}
                />
              </div>

              {/* Generate CTA */}
              <div className="shrink-0 px-8 pb-8">
                <button
                  onClick={() => setHasRecommendation(true)}
                  className="w-full py-5 bg-[#1a1a1a] text-white text-[14px] font-bold uppercase tracking-[0.3em] rounded-xl hover:bg-heritage-sage active:scale-[0.99] transition-all"
                >
                  {t('planner.modal.generate')}
                </button>
              </div>
            </motion.div>

          ) : (
            /* ── RESULTS VIEW ── */
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full min-h-0"
            >
              {/* Results scrollable body */}
              <div className="flex-1 overflow-y-auto scrollbar-transparent min-h-0">
                <PlannerAdviceCard advice={advice} origin={origin} />
              </div>

              {/* Compact controls bar at bottom */}
              <div className="shrink-0 px-8 py-5 border-t border-[#1a1a1a]/8 flex items-center justify-between gap-8">
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
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setRefreshSeed(prev => prev + 1)}
                    className="shrink-0 text-[14px] font-bold uppercase tracking-[0.15em] text-heritage-sage border border-heritage-sage/30 px-6 py-3 rounded-lg hover:bg-heritage-sage/10 transition-all whitespace-nowrap"
                  >
                    {t('planner.modal.refresh')}
                  </button>
                  <button
                    onClick={() => setHasRecommendation(false)}
                    className="shrink-0 text-[14px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a]/60 border border-[#1a1a1a]/15 px-6 py-3 rounded-lg hover:text-[#1a1a1a] hover:border-[#1a1a1a]/30 transition-all whitespace-nowrap"
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
