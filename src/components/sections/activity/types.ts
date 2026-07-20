export type Activity = {
  title: string;
  desc: string;
  difficulty?: string;
  image?: string;
};

export type SignatureDish = {
  name: string;
  desc: string;
  price: string;
  image: string;
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

export type BasicInfo = {
  location: string;
  hours: string;
  price: string;
  ticketLink?: string;
  rating: string;
  category: string;
};

export type VisitorTips = {
  bestTime: string;
  bring: string[];
  avoid: string[];
  insiderTips: string[];
};

export type HowToGetThere = {
  fromMalang?: string;
  fromBatu?: string;
  fromSurabaya?: string;
  publicTransport?: string;
  recommendations?: string;
};

export type NearbyPlace = {
  name: string;
  distance: string;
  reason: string;
};

export type Place = {
  title: string;
  tagline?: string;
  description: string;
  heroImage: string;
  basicInfo?: BasicInfo;
  gallery: any[]; // Supports both string[] and {src: string, desc: string}[]
  story: string;
  keyAttractions?: { title: string; desc: string; image?: string }[];
  thingsToDo?: Activity[];
  visitorTips?: VisitorTips;
  tips: string[];
  bestTime?: BestTime[];
  howToGetThere?: HowToGetThere;
  facilities?: string[];
  foodNearby?: string[];
  stayNearby?: string[];
  contactInfo?: string;
  funFacts?: string[];
  nearbyPlaces?: NearbyPlace[];
  closingCTA?: string;
  location: Coordinates;
  priceRange?: string;
  ambience?: string;
  paymentMethods?: string[];
  bestFor?: string;
  signatureDishes?: SignatureDish[];
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
  contextType?: 'trail' | 'urban';
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
  fees: PlaceFeeData;
}
