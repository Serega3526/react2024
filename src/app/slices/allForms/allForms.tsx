import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormInput } from "../../../types/types";

const initialState: IFormInput[] = [];

export const allFormsSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    addToAllForms: (state, action: PayloadAction<IFormInput>) => {
      state.push(action.payload);
    },
  },
});

export const { addToAllForms } = allFormsSlice.actions;

export default allFormsSlice.reducer;
