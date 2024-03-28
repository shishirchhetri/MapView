import { Fragment, useState } from 'react';
import type { Place } from '../api/place';
import { search } from '../api/search';

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    /*     console.log('Need to search API..', term); */
    const results = await search(term);
    setPlaces(results);
  }

  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor='term' className='font-bold'>
          Search
        </label>

        <input
          type='text'
          className='border border-gray-300 rounded-md shadow-md focus:border-indigo-500 px-4 py-3 w-full'
          id='term'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      <h1 className='font-bold mt-6'>Found Locations</h1>
      <div className='grid grid-cols-[1fr_40px] gap-2 mt-2 items-center'>
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className='text-sm'>{place.name}</p>
              <button
                className='bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded'
                onClick={() => onPlaceClick}
              >
                Go
              </button>

              <div className='border-b w-full col-span-2'></div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
