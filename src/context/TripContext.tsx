import { createContext, useContext, useState, type ReactNode } from 'react';

export interface TripPlace {
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
}

interface TripContextValue {
  tripPlaces: TripPlace[];
  addToTrip: (place: TripPlace) => void;
  removeFromTrip: (id: string) => void;
  isInTrip: (id: string) => boolean;
  directionsUrl: string;
}

const TripContext = createContext<TripContextValue | null>(null);

export function TripProvider({ children }: { children: ReactNode }) {
  const [tripPlaces, setTripPlaces] = useState<TripPlace[]>([]);

  function addToTrip(place: TripPlace) {
    setTripPlaces((prev) => prev.some((p) => p.id === place.id) ? prev : [...prev, place]);
  }

  function removeFromTrip(id: string) {
    setTripPlaces((prev) => prev.filter((p) => p.id !== id));
  }

  function isInTrip(id: string) {
    return tripPlaces.some((p) => p.id === id);
  }

  const directionsUrl = tripPlaces.length > 0
    ? `https://www.google.com/maps/dir/${tripPlaces.map((p) => `${p.coordinates.lat},${p.coordinates.lng}`).join('/')}`
    : '';

  return (
    <TripContext.Provider value={{ tripPlaces, addToTrip, removeFromTrip, isInTrip, directionsUrl }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  const ctx = useContext(TripContext);
  if (!ctx) throw new Error('useTrip must be used within TripProvider');
  return ctx;
}
