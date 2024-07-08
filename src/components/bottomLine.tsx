import { Component, ReactNode } from 'react';
import PeopleItem from './peopleItem';
import ErrorButton from './buttonError';
import { state, props } from '../types/types';
import SearchString from '../localStorage/localStorage';

const BASE_PATH = 'https://swapi.dev/api';
const PAGE_PATH = '/people';
const SEARCH_PATH = '/?search=';

class BottomLine extends Component {
  constructor(props: props) {
    super(props);
  }

  state: state = {
    searchQuerry: SearchString.getString(),
    result: [],
    loading: false,
  };

  componentDidMount(): void {
    const { searchQuerry } = this.state;
    this.fetchData(searchQuerry);
  }

  fetchData = (searchQuerry: string) => {
    this.setState({
      loading: true,
    });
    fetch(`${BASE_PATH}${PAGE_PATH}${SEARCH_PATH}${searchQuerry}`)
      .then((res) => res.json())
      .then((result) => {
        this.setResult(result.results);
        this.setState({
          loading: false,
        });
      })
      .catch((error) => error);
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchQuerry: e.target.value,
    });
  };

  getSearch = () => {
    const { searchQuerry } = this.state;
    SearchString.setString(searchQuerry);
    this.fetchData(searchQuerry);
  };

  setResult = (result: Response) => {
    this.setState({ result });
  };

  render(): ReactNode {
    const { searchQuerry, result, loading } = this.state;

    return (
      <>
        <div className="topLine">
          <input type="search" onChange={this.handleInputChange} value={searchQuerry} />
          <button onClick={this.getSearch}>Search</button>
          <ErrorButton />
        </div>
        {loading ? (
          <span className="loader"></span>
        ) : (
          <div className="bottomLine">
            <>
              {result.map((item: props) => (
                <PeopleItem
                  birth_year={item.birth_year}
                  eye_color={item.eye_color}
                  gender={item.gender}
                  hair_color={item.hair_color}
                  height={item.height}
                  mass={item.mass}
                  name={item.name}
                  skin_color={item.skin_color}
                />
              ))}
            </>
          </div>
        )}
      </>
    );
  }
}

export default BottomLine;
