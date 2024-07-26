import { describe } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import NotFoundPage from './notFound';

const renderWithProviders = (ui: React.ReactElement, { route = `404test` } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
  );
};

describe('Not found', () => {
  it('display top content', () => {
    render(<NotFoundPage />);
    renderWithProviders(<NotFoundPage />);
    waitFor(() => {
      expect(screen.getByText('404 error')).toBeInTheDocument();
    });
  });
});
