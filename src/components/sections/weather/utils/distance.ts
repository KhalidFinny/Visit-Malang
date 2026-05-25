import { MAP_PLACES } from "../../../../data/mapPlaces";
import type { MapPlace } from "../../../../data/mapPlaces";

/**
 * Haversine formula to calculate distance between two coordinates in km
 */
export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Get coordinates for a place by name (from mapPlaces)
 */
export function getPlaceCoordinates(name: string): { lat: number; lng: number } | null {
  const place = MAP_PLACES.find(
    (p: MapPlace) =>
      p.name.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(p.name.toLowerCase())
  );
  return place ? place.coordinates : null;
}

/**
 * Calculate driving time in hours from Malang city center
 */
export function getDrivingTimeFromMalang(name: string): string {
  const MALANG_CENTER = { lat: -7.9666, lng: 112.6326 };
  const coords = getPlaceCoordinates(name);

  if (!coords) {
    if (name.toLowerCase().includes("batu")) return "0.5";
    if (name.toLowerCase().includes("bromo")) return "3";
    if (name.toLowerCase().includes("tumpak")) return "2.5";
    return "1";
  }

  const distance = haversineDistance(
    MALANG_CENTER.lat,
    MALANG_CENTER.lng,
    coords.lat,
    coords.lng
  );

  // Average driving speed ~40 km/h for mountain roads
  const time = distance / 40;
  const rounded = Math.round(time * 2) / 2;

  return rounded.toFixed(1).replace(/\.0$/, "");
}

/**
 * Format driving time with range
 * e.g. "1.5 - 2.5 h"
 */
export function formatDrivingTime(baseTime: string): string {
  const time = parseFloat(baseTime);
  const min = Math.max(0.5, time - 0.5);
  const max = time + 0.5;
  return `${min} - ${max} h`;
}
