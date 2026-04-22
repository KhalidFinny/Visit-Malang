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
