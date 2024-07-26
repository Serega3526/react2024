import { describe } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Pages } from '../enums/enums';
import PeopleItem from './peopleItem';

const renderWithProviders = (ui: React.ReactElement, { route = `?${Pages.ATTR_PATH}=1` } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
  );
};

describe('Bottom Line', () => {
  it('display top content', () => {
    renderWithProviders(
      <PeopleItem
        name={''}
        image={''}
        click={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    waitFor(() => {
      expect(screen.getByText('Add to state')).toBeInTheDocument();
    });
  });
});
