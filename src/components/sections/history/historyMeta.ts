import { faLandmark, faBuildingColumns, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export const HISTORY_PERIOD_META = {
  kingdoms: {
    chapter: "01",
    landmarks: ["Dinoyo Inscription", "Badut Temple"],
    icon: faLandmark,
  },
  colonial: {
    chapter: "02",
    landmarks: ["Ijen Boulevard", "Balai Kota"],
    icon: faBuildingColumns,
  },
  modern: {
    chapter: "03",
    landmarks: ["Tugu Malang", "City Center"],
    icon: faMapLocationDot,
  },
} as const;
