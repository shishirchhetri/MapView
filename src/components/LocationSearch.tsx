import { useState } from 'react';
import type { Place } from '../api/place';

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place | null>([]);
  const [term, setTerm] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    console.log('Need to search API..', term);
  }

  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor='term' className='font-bold'>
          Search
        </label>

        <input
          type='text'
          className='borser border-gray-300 rounded-md shadow-md focusLborder:indigo'
          id='term'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
