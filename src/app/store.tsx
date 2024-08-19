import { configureStore } from "@reduxjs/toolkit";
import controlSlice from "./slices/controlPageSlice/controlPageSlice";
import uncontrolSlice from "./slices/uncontrolPageSlice/uncontrolPageSlice";
import allForms from "./slices/allForms/allForms";

export const store = configureStore({
  reducer: {
    control: controlSlice,
    uncontrol: uncontrolSlice,
    allForms: allForms,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
