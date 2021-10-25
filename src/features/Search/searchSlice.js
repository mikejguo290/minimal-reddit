import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'search',
    initialState: '',
    reducers: {
        submitSearchTerm:(state, action) =>{
            state = action.payload;
        }
    },
}

const searchSlice = createSlice(options);

export const selectSearch = state => state.search;
export const { submitSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;