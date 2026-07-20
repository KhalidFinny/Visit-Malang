/**
 * Haversine formula — great-circle distance between two points.
 * Returns straight-line (as-the-crow-flies) distance; actual road distance will be longer.
 */
export function haversineDistance(
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

/**
 * Rough driving time estimate (km ÷ avg 40 km/h for city driving).
 */
export function estimateDrivingTime(distanceKm: number): { hours: number; minutes: number } {
  const avgSpeed = 40; // km/h urban average
  const hours = distanceKm / avgSpeed;
  return {
    hours: Math.floor(hours),
    minutes: Math.round((hours - Math.floor(hours)) * 60),
  };
}
