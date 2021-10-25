import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice'; 
import searchReducer from '../features/Search/searchSlice';
import subredditsReducer from '../features/Subreddits/subredditsSlice';
import commentsReducer from '../features/Comments/commentsSlice';


const rootReducer = {
    posts:postsReducer,
    search:searchReducer,
    subreddits:subredditsReducer,
    comments:commentsReducer,
}

const store = configureStore({reducer:rootReducer});

export default store;