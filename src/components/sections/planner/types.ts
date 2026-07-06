import type { ReactNode } from 'react';
import type { Recommendation } from '../weather/types';

export type BudgetTier = 'backpacker' | 'balanced' | 'luxury';

export interface EconomyOrigin {
  code: string;
  name: string;
  strength: 'high' | 'medium' | 'local';
  flag: string;
}

export interface PlannerAdvice {
  headline: string;
  counsel: string;
  places: Recommendation[];
  foods: Recommendation[];
  budgetEstimation: {
    origin: string;
    level: string;
    strength: string;
    suggestion: string;
    dailyEstimate: string;
    totalEstimate: string;
  };
}

export interface ActivityOption {
  id: string;
  name: string;
  category: string;
  costTier: BudgetTier;
  suitability: {
    weather: string[];
    time: string[];
  };
  description: string;
}

export interface PlannerAdviceCardProps {
  advice: PlannerAdvice;
  origin: EconomyOrigin;
}

export interface PlannerInputsProps {
  budget: BudgetTier;
  setBudget: (b: BudgetTier) => void;
  origin: EconomyOrigin;
  setOrigin: (o: EconomyOrigin) => void;
  selectedMonth?: number;
  setSelectedMonth?: (m: number) => void;
  monthsList?: string[];
  compact?: boolean;
  step?: number;
}

export interface PlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface PlannerTeaserProps {
  onOpen: () => void;
}
