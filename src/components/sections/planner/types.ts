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
  highlights: string[];
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
