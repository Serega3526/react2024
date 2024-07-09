import { Component, ReactNode } from 'react';
import './App.css';
import BottomLine from './components/bottomLine';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <ErrorBoundary>
          <BottomLine />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
