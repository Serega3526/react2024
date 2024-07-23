import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/contextThemeProvider.tsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  count: 0
}


const reducer = (state = defaultState, action: { type: string; }) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {...state, count: state.count + 1}
    case "REMOVE_ITEM":
      return {...state, count: state.count - 1}
    default: 
      return state
  }

}

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
