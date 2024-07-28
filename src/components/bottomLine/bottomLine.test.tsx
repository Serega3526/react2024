import { describe, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Pages } from '../enums/enums';
import BottomLine from './bottomLine';

const renderContent = (content: React.ReactElement) => {
  window.history.pushState({}, 'Test', `?${Pages.ATTR_PATH}=1`);

  return render(
    <Provider store={store}>
      <BrowserRouter>{content}</BrowserRouter>
    </Provider>,
  );
};

describe('Bottom Line', () => {
  it('display top content', () => {
    renderContent(<BottomLine />);
    waitFor(() => {
      expect(screen.getByText('main')).toBeInTheDocument();
    });
  });
  it('display bottom content', () => {
    renderContent(<BottomLine />);
    waitFor(() => {
      expect(screen.getByTestId('bottom-content')).toBeInTheDocument();
    });
  });
  it('click on button Search', () => {
    const handleClick = vi.fn();
    renderContent(<BottomLine />);
    waitFor(() => {
      fireEvent.click(screen.getByText('Search'));
      expect(handleClick).toHaveBeenCalled();
    });
  });
  it('click on button detail', () => {
    const handleClick = vi.fn();
    renderContent(<BottomLine />);
    waitFor(() => {
      fireEvent.click(screen.getByText('Rick Sanchez'));
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
