import { ErrorInfo, useEffect, useState } from 'react';
import PeopleItem from './peopleItem';
import ErrorButton from './buttonError';
import { props } from '../types/types';
import useInput from '../hooks/useInput';
import getString from '../localStorage/getString';
import setString from '../localStorage/setString';
import { Link } from 'react-router-dom';



function BottomLine () {
  
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  const BASE_PATH = 'https://swapi.dev/api';
  const PAGE_PATH = '/people';
  const SEARCH_PATH = '/?search=';

  const inputValue = useInput(getString)

  const fetchData = (searchQuerry: string) => {
    setLoading(true)
    
    fetch(`${BASE_PATH}${PAGE_PATH}${SEARCH_PATH}${searchQuerry}`)
      .then((res) => res.json())
      .then((result) => {
        setResult(result.results)
        setLoading(false)
      })
      .catch((error: ErrorInfo) => error);
  };
  useEffect(() => {
    fetchData(inputValue.searchQuerry)
  },[inputValue.searchQuerry])

  

  const getSearch = () => {
    setString(inputValue.searchQuerry);
    fetchData(inputValue.searchQuerry);
  };

  return (
    <>
      <div className="topLine">
        <nav>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/404">404</Link></li>
        </nav>
        <input type="search" {...inputValue} onChange={inputValue.handleInputChange} value={inputValue.searchQuerry} />
        <button onClick={getSearch}>Search</button>
        <ErrorButton />
      </div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className="bottomLine">
          <>
            {result.map((item: props, key) => (
              <PeopleItem
                birth_year={item.birth_year}
                eye_color={item.eye_color}
                gender={item.gender}
                hair_color={item.hair_color}
                height={item.height}
                mass={item.mass}
                name={item.name}
                skin_color={item.skin_color}
                key={key}
              />
            ))}
          </>
        </div>
      )}
    </>
  );
}

export default BottomLine;