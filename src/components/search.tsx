import { Component, ReactNode } from 'react';

class Search extends Component {
  render(): ReactNode {
    return (
      <div>
        <input type="search" />
        <button>Найти</button>
      </div>
    );
  }
}

export default Search;
