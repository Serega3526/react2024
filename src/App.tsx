import { Component, ReactNode } from 'react';
import './App.css';
import BottomLine from './components/bottomLine';
import ErrorBoundary from './components/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/notFound';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<BottomLine />}/>
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
