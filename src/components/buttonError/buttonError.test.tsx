import { describe, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ErrorButton from './buttonError';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { Pages } from '../enums/enums';


const renderContent = (content: React.ReactElement) => {
  window.history.pushState({}, 'Test', `?${Pages.SEARCH_PATH}=1&${Pages.DETAILS}=1`);

  return render(
    <Provider store={store}>
      <BrowserRouter>{content}</BrowserRouter>
    </Provider>,
  );
};

describe('Top Content', () => {
  it('render error button', () => {
    render(<ErrorButton />);
    expect(screen.getByTestId('button-error')).toHaveTextContent('ERROR');
  });
  it('click on button', () => {
    const handleClick = vi.fn();
    renderContent(<ErrorButton />);
    waitFor(() => {
      fireEvent.click(screen.getByText('ERROR'));
      expect(handleClick).toHaveBeenCalled();
    });
  })
});
