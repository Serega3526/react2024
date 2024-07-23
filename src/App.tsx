import './App.css';
import BottomLine from './components/bottomLine';
import ErrorBoundary from './components/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/notFound';
import { useTheme } from './context/contextCreater';


function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`body ${theme}`}>
        <div className="root">
          <div className={theme}>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<BottomLine />}>
                  <Route index element={<BottomLine />} />
                  <Route path="?page=:num" element={<BottomLine />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
