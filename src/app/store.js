import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice'; 


const rootReducer = {
    posts:postsReducer,
}

const store = configureStore({reducer:rootReducer});

export default store;