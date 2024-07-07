import { Component, ReactNode } from 'react';
import Search from './search';

class TopLine extends Component {
  render(): ReactNode {
    return (
      <div className="topLine">
        <Search />
      </div>
    );
  }
}

export default TopLine;
