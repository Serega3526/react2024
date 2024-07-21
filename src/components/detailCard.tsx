import { useEffect, useState } from 'react';
import { person } from '../types/types';
import { getSingleCharacter } from '../utils/utils';
import { Pages } from './enums/enums';

export default function DetailCard() {
  const [person, setPerson] = useState<person | null>(null);
  
  const searchParams = new URLSearchParams(location.search);

  const fetchSingleCharacter = () => {
    const id = searchParams.get(Pages.DETAILS);
    if (id) {
      return getSingleCharacter(+id);
    }

    return null;
  };

  useEffect(() => {
    fetchSingleCharacter()
      ?.then((resp) => {
        setPerson(resp);
      })
      .catch(() => {
        console.error();
      });
  });

  return (
    <>
      {person && (
        <div>
          <button>X</button>
          <img src={person.image} alt="" />
          <h3>{person.name}</h3>
          <p>{person.species}</p>
          <p>{person.gender}</p>
          <p>{person.type}</p>
          <p>{person.status}</p>
        </div>
      )}
    </>
  );
}
