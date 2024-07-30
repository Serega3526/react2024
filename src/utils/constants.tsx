import { PeopleSlice } from './people';
import { counterSlice } from './counter';

export const { addPeople, delPeople, delAllPeople, setPage } = PeopleSlice.actions;
export const { increment, decrement, deleteAll } = counterSlice.actions;
