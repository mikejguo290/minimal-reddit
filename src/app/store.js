import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice'; 
import searchReducer from '../features/Search/searchSlice';
import subredditsReducer from '../features/Subreddits/subredditsSlice';


const rootReducer = {
    posts:postsReducer,
    search:searchReducer,
    subreddits:subredditsReducer,
}

const store = configureStore({reducer:rootReducer});

export default store;