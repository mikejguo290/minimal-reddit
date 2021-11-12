import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const clearSearch = createAsyncThunk(
    // dispatch thunk to clear searchTerm only when there is a search term value.
    // no async function within but making use of the middleware. 
    // works together with useEffect in Page component to create the function clear search on page change (when search term is set.)
    'search/clearSearch',
    (arg,thunkAPI)=>{
        thunkAPI.dispatch(setSearchTerm(''));
    },{
        condition:(arg, {getState,extras})=>{
            const { search } = getState()
            const searchTerm = search.value;
            if(!searchTerm){
                return false;
            }
        }
    }
);

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
        },
        clearSearchTerm:(state) => {
            state.value='';
        }
    },
}

const searchSlice = createSlice(options);

export const selectSearch = state => state.search.value;
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;