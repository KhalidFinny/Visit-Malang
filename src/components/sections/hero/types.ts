import type { MotionValue } from "framer-motion";
import type { MapCategory, MapPlace } from "../../../data/mapPlaces";

export interface HeroParallaxValues {
  heroRef: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  tuguScale: MotionValue<number>;
  tuguY: MotionValue<string>;
  skyScale: MotionValue<number>;
  fadeOpacity: MotionValue<number>;
}

export interface HeroSkyProps {
  skyScale: MotionValue<number>;
}

export interface HeroTuguProps {
  tuguScale: MotionValue<number>;
  tuguY: MotionValue<string>;
}

export interface HeroContentProps {}

export interface HeroCategoriesProps {
  onSelect: (cat: MapCategory) => void;
}

export interface HeroMapProps {
  category: MapCategory;
  onClose?: () => void;
}

export interface MapCardProps {
  place: MapPlace | null;
  onClose: () => void;
  onOpenDirections: () => void;
}

export interface HeroDestination {
  name: string;
  category: string;
  image: string;
}

export interface TripPanelProps {
  inline?: boolean;
}

/** Internal type for Leaflet map container element check */
export type LeafletEl = HTMLElement & { _leaflet_id?: number };
