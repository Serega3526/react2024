import { useEffect, useState } from 'react';
import PeopleItem from '../peopleItem/peopleItem';
import ErrorButton from '../buttonError/buttonError';
import useInput from '../../hooks/useInput';
import getString from '../../localStorage/getString';
import setString from '../../localStorage/setString';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import countPages from '../../utils/utils';
import DetailCard from '../detailCard/detailCard';
import { Pages } from '../enums/enums';
import { useTheme } from '../../context/contextCreater';
import ModalCheckedItem from '../modalCheckedItem/modalCheckedItem';
import { RAMApi } from '../../services/apiRAM';
import { person } from '../../types/types';
import { useDispatch } from 'react-redux';
import { setPage } from '../../utils/constants';

export function BottomLine() {
  const [currPage, setCurrPage] = useState(1);

  const inputValue = useInput(getString);
  const navigate = useNavigate();
  const location = useLocation();
  const pages = countPages(100);

  const dispatch = useDispatch();

  const { theme, change } = useTheme();

  const { data, isLoading } = RAMApi.useGetAllPersonsQuery({ searchQuerry: inputValue.searchQuerry, page: currPage });

  const getSearch = () => {
    setString(inputValue.searchQuerry);
  };

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    const page = parseInt(url.get(Pages.ATTR_PATH) || '1', 10);
    if (page !== Number(url.get(Pages.ATTR_PATH))) {
      navigate(`?page=${page}`, { replace: true });
    }
    setCurrPage(page);
  }, [location.search, navigate]);

  const handleCurPage = (page: number): void => {
    setCurrPage(page);
    dispatch(setPage(page));
  };

  return (
    <>
      <div data-testid="top-content" className="topLine">
        <nav>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/werwerwe">404</Link>
          </li>
        </nav>
        <input type="search" onChange={inputValue.handleInputChange} value={inputValue.searchQuerry} />
        <button onClick={getSearch}>Search</button>
        <ErrorButton />
        <button onClick={change}>{theme === 'light' ? 'Change to Dark theme' : 'Change to Light theme'}</button>
      </div>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <>
          <div data-testid="bottom-content" className="all__persone">
            <div className="bottomLine">
              <>
                {data &&
                  data.results.map((person: person) => (
                    <div key={person.url}>
                      <PeopleItem
                        name={person.name}
                        image={person.image}
                        key={person.url}
                        gender={person.gender}
                        species={person.species}
                        status={person.status}
                        url={person.url}
                        type={person.type}
                        // click={(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => handleDetail(e, person.url)}
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
              <Link className="pagePagination" key={index} onClick={() => handleCurPage(page)} to={`?page=${page}`}>
                {page}
              </Link>
            ))}
          </div>
          <ModalCheckedItem />
        </>
      )}
    </>
  );
}

export default BottomLine;
