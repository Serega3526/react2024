import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/contextThemeProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';

// const reducer = (state = defaultState, action: { type: string; }) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return {...state, count: state.count + 1}
//     case "REMOVE_ITEM":
//       return {...state, count: state.count - 1}
//     default:
//       return state
//   }

// }

// const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
