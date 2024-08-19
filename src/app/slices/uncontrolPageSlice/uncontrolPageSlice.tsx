import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormInput } from "../../../types/types";

const initialState: { data: IFormInput } = {
  data: {},
};

export const uncontrolSlice = createSlice({
  name: "uncontrol",
  initialState,
  reducers: {
    addToStateUncontrol: (state, action: PayloadAction<IFormInput>) => {
      state.data = action.payload;
    },
  },
});

export const { addToStateUncontrol } = uncontrolSlice.actions;

export default uncontrolSlice.reducer;
