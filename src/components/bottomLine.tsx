import { ErrorInfo, useEffect, useState } from 'react';
import PeopleItem from './peopleItem';
import ErrorButton from './buttonError';
import { props } from '../types/types';
import SearchString from '../localStorage/localStorage';



function BottomLine () {
  const [searchQuerry, setSearchQuerry] = useState(SearchString.getString())
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  const BASE_PATH = 'https://swapi.dev/api';
  const PAGE_PATH = '/people';
  const SEARCH_PATH = '/?search=';



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
    fetchData(searchQuerry)
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuerry(e.target.value)
  };

  const getSearch = () => {
    SearchString.setString(searchQuerry);
    fetchData(searchQuerry);
  };

  return (
    <>
      <div className="topLine">
        <input type="search" onChange={handleInputChange} value={searchQuerry} />
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