// import { createSlice } from '@reduxjs/toolkit';
// import { RAMApi } from '../services/apiRAM';
// import { Pages } from '../components/enums/enums';
// import { person } from '../types/types';

// export interface CardInStoreState {
//   cards: [{
//     gender: string,
//     image: string,
//     name: string,
//     species: string,
//     status: string,
//     type: string
//   }]
// }

// const initialState: CardInStoreState = {
//   cards: [{
//     gender: '',
//     image: '',
//     name: '',
//     species: '',
//     status: '',
//     type: ''
//   }]
// };

// export const CardInStoreSlice = createSlice({
//   name: 'cardInStore',
//   initialState,
//   reducers: {
//     addCard: (state) => {
//         const searchParams = new URLSearchParams(location.search);
//         const id = searchParams.get(Pages.DETAILS);
//         const { data } = RAMApi.useGetPersonQuery(Number(id));
//         if(data) {
//             const value = {
//                 gender: data.gender,
//                 image: data.image,
//                 name: data.name,
//                 species: data.species,
//                 status: data.status,
//                 type: data.type
//             }
//             state.cards.push(value)
//         }

//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addCard } = CardInStoreSlice.actions;

// export default CardInStoreSlice.reducer;
