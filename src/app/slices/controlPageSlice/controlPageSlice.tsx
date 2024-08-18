import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFormInput } from '../../../types/types'


const initialState: {data: IFormInput} = {
    data: {}
}

export const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    addToStateControl: (state, action: PayloadAction<IFormInput>) => {
        state.data = action.payload
    },
  },
})

export const { addToStateControl } = controlSlice.actions

export default controlSlice.reducer