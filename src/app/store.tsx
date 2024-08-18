import { configureStore } from '@reduxjs/toolkit'
import controlSlice from './slices/controlPageSlice/controlPageSlice'


export const store = configureStore({
  reducer: {
    control: controlSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;