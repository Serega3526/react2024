import { ErrorInfo, useCallback, useEffect, useState, MouseEvent } from 'react';
import PeopleItem from './peopleItem';
import ErrorButton from './buttonError';
import useInput from '../hooks/useInput';
import getString from '../localStorage/getString';
import setString from '../localStorage/setString';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import countPages from '../utils/utils';
import DetailCard from './detailCard';
import { Pages } from './enums/enums';
import { useTheme } from '../context/contextCreater';
import ModalCheckedItem from './modalCheckedItem';

function BottomLine() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const inputValue = useInput(getString);
  const navigate = useNavigate();
  const location = useLocation();
  const pages = countPages(100);
  const searchParams = new URLSearchParams(location.search);

  const { theme, change } = useTheme();

  const fetchData = useCallback(
    (searchQuerry: string) => {
      setLoading(true);

      fetch(`${Pages.BASE_PATH}?${Pages.SEARCH_PATH}=${searchQuerry}&${Pages.ATTR_PATH}=${currPage}`)
        .then((res) => res.json())
        .then((result) => {
          // setPageCount(result.info.count)
          setResult(result.results);
          setLoading(false);
        })
        .catch((error: ErrorInfo) => error);
    },
    [currPage],
  );
  useEffect(() => {
    fetchData(inputValue.searchQuerry);
  }, [fetchData, inputValue.searchQuerry, currPage]);

  const getSearch = () => {
    setString(inputValue.searchQuerry);
    fetchData(inputValue.searchQuerry);
  };

  const handleDetail = (e: MouseEvent<HTMLElement>, url: string) => {
    e.stopPropagation();
    const pathUrl = url.split('/');
    const id = pathUrl[pathUrl.length - 1];

    searchParams.set(Pages.DETAILS, id);

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get(Pages.ATTR_PATH) || '1', 10);
    if (page !== Number(query.get(Pages.ATTR_PATH))) {
      navigate(`?page=${page}`, { replace: true });
    }
    setCurrPage(page);
  }, [location.search, navigate]);

  return (
    <>
      <div className="topLine">
        <nav>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
        </nav>
        <input type="search" onChange={inputValue.handleInputChange} value={inputValue.searchQuerry} />
        <button onClick={getSearch}>Search</button>
        <ErrorButton />
        <button onClick={change}>{theme === 'light' ? 'Change to Dark theme' : 'Change to Light theme'}</button>
      </div>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <div className="all__persone">
            <div className="bottomLine">
              <>
                {result.map(({ name, image, url }) => (
                  <div>
                    <PeopleItem
                      name={name}
                      image={image}
                      key={url}
                      click={(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => handleDetail(e, url)}
                    />
                  </div>
                ))}
              </>
            </div>

            <div>
              <DetailCard />
            </div>
          </div>
          <div className="pagination">
            {pages.map((page, index) => (
              <Link
                className="pagePagination"
                key={index}
                onClick={() => {
                  setCurrPage(page);
                }}
                to={`?page=${page}`}>
                {page}
              </Link>
            ))}
            <ModalCheckedItem />
          </div>
        </>
      )}
    </>
  );
}

export default BottomLine;
