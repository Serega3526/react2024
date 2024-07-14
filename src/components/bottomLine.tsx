import { ErrorInfo, useCallback, useEffect, useState } from 'react';
import PeopleItem from './peopleItem';
import ErrorButton from './buttonError';
import { props } from '../types/types';
import useInput from '../hooks/useInput';
import getString from '../localStorage/getString';
import setString from '../localStorage/setString';
import { Link } from 'react-router-dom';
import countPages from '../utils/utils';



function BottomLine () {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const [currPage, setCurrPage] = useState(1)

  // const {num} = useParams

  const BASE_PATH = 'https://swapi.dev/api';
  const PAGE_PATH = '/people';
  const SEARCH_PATH = '/?search=';
  const ATTR_PATH = '&page='
  const pages = countPages(pageCount)

  const inputValue = useInput(getString)
  
  const fetchData = useCallback((searchQuerry: string) => {
    setLoading(true)
    
    fetch(`${BASE_PATH}${PAGE_PATH}${SEARCH_PATH}${searchQuerry}${ATTR_PATH}${currPage}`)
      .then((res) => res.json())
      .then((result) => {
        setPageCount(result.count)
        setResult(result.results)
        setLoading(false)
      })
      .catch((error: ErrorInfo) => error);
  },[currPage])
  
  useEffect(() => {
    
    fetchData(inputValue.searchQuerry)
  },[fetchData,inputValue.searchQuerry,currPage])

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
        <input type="search" onChange={inputValue.handleInputChange} value={inputValue.searchQuerry} />
        <button onClick={getSearch}>Search</button>
        <ErrorButton />
      </div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
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
        <div className='pagination' >
        {pages.map((page, index) => 
            <Link className='pagePagination' key={index} onClick={() => {
              console.log('1', page)
              setCurrPage(page)
              console.log('2', page)
            }} to={`/page/${page}`}>{page}</Link>
          )}
        </div>
        </>
      )}
      
    </>
  );
}

export default BottomLine;