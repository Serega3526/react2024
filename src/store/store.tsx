import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../utils/counter';
// import cardInStoreReducer from '../utils/cardInStore'
import { RAMApi } from '../services/apiRAM';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // cardInStore: cardInStoreReducer,
    [RAMApi.reducerPath]: RAMApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(RAMApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
