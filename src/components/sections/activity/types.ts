export type Activity = {
  title: string;
  desc: string;
};

export type BestTime = {
  icon: string;
  badge: string;
  label: string;
  value: string;
  color: string;
  intensity: string;
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Place = {
  title: string;
  description: string;
  heroImage: string;
  thingsToDo: Activity[];
  tips: string[];
  bestTime: BestTime[];
  location: Coordinates;
  story: string;
  gallery: string[];
};

export type Category = {
  title: string;
  description: string;
  places: Place[];
};

export interface PlaceAltitudeAdvisorData {
  altitude: number;
  temp_range: string;
  packing_list: string;
}

export interface PlaceAltitudeAdvisorProps {
  altitude: PlaceAltitudeAdvisorData;
}

export interface PlaceSafetyData {
  status: 'open' | 'caution' | 'closed';
  name: string;
  details: string;
  last_updated: string;
}

export interface PlaceSafetyAdvisoryProps {
  safety: PlaceSafetyData;
}

export interface MountainSunrisePredictorProps {
  lat: number;
  lng: number;
}

export interface PlaceFeeData {
  domestic_entry: number;
  foreign_entry: number;
  transport_cost: number;
  parking_cost: number;
  notes: string;
  atm_info: string;
}

export interface PlaceCashAdvisorProps {
  slug: string;
  fees: PlaceFeeData;
}
