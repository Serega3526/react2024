import { describe } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import NotFoundPage from './notFound';

const renderContent = (content: React.ReactElement) => {
  window.history.pushState({}, 'Test', `/test404`);

  return render(
    <Provider store={store}>
      <BrowserRouter>{content}</BrowserRouter>
    </Provider>,
  );
};

describe('Not found', () => {
  it('display not found content', () => {
    renderContent(<NotFoundPage />);
    waitFor(() => {
      expect(screen.getByText('404 error')).toBeInTheDocument();
    });
  });
});
