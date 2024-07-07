import { Component, ReactNode } from 'react';
import './App.css';
import TopLine from './components/topLine';
import BottomLine from './components/bottomLine';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <TopLine />
        <BottomLine />
      </>
    );
  }
}

export default App;
