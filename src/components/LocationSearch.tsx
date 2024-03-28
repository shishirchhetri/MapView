import { useState } from 'react';
import type { Place } from '../api/place';

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place | null>([]);
  return <div>Location Search</div>;
}
