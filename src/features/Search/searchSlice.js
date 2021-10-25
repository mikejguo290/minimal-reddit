import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'search',
    initialState: {value:''},
    // A case reducer on a non-draftable value must not return undefined
    /* Redux Toolkit's createReducer() allows writing reducers that directly mutate the state. 
    This works by wrapping the reducer call with produce from the Immer library.
    However, the reducer call isn't wrapped with produce when the current state isn't "draftable" by Immer, 
    which is the case for primitive values, including null, 0, '' , in which case you'd have to return rather than mutate. */
    reducers: {
        setSearchTerm:(state, action) =>{
            state.value = action.payload;
        }
    },
}

const searchSlice = createSlice(options);

export const selectSearch = state => state.search.value;
export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;