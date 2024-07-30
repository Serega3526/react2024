import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { person } from '../types/types';

export interface PeopleState {
  page: number;
  peoples: person[];
}

const initialState: PeopleState = {
  page: 1,
  peoples: [],
};

export const PeopleSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    addPeople: (state, action: PayloadAction<person>) => {
      state.peoples.push(action.payload);
    },
    delPeople: (state, action: PayloadAction<person>) => {
      state.peoples.splice(state.peoples.findIndex((people) => people.name === action.payload.name));
    },
    delAllPeople: (state) => {
      state.peoples = [];
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { addPeople, delPeople, delAllPeople, setPage } = PeopleSlice.actions;

export default PeopleSlice.reducer;
