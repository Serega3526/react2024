import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from './context/contextThemeProvider';

describe('Main', () => {
  it('render Main', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>,
    );
    expect(screen.getByText('ERROR')).toBeInTheDocument();
  });
  it('renders App component without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
});
