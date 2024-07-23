import { useEffect, useState } from 'react';
import { person } from '../types/types';
import { getSingleCharacter } from '../utils/utils';
import { Pages } from './enums/enums';
import { useNavigate } from 'react-router-dom';

export default function DetailCard() {
  const [person, setPerson] = useState<person | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get(Pages.DETAILS);

  useEffect(() => {
    const fetchSingleCharacter = () => {
      if (id) {
        setLoading(true);
        return getSingleCharacter(+id);
      }

      return null;
    };
    fetchSingleCharacter()
      ?.then((resp) => {
        setPerson(resp);
        setLoading(false);
      })
      .catch(() => {
        console.error();
      });
  }, [id]);

  const handleDelDetails = () => {
    setPerson(null);
    searchParams.delete(Pages.DETAILS);

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      {loading && <span className="loader"></span>}
      {person && (
        <div>
          <button onClick={handleDelDetails}>X</button>
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
