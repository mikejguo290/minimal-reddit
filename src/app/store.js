import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice'; 
import searchReducer from '../features/Search/searchSlice';


const rootReducer = {
    posts:postsReducer,
    search:searchReducer,
}

const store = configureStore({reducer:rootReducer});

export default store;