import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import redditAPI from '../../utils/redditAPI';

export const fetchPostsBySubreddit = createAsyncThunk(
    'posts/fetchPostsBySubreddit', 
    async(subreddit)=>{
        const posts = await redditAPI.getPosts(subreddit);
        return posts;
    }
);

const options = {
    name: 'posts',
    initialState: {
        posts:[], // array of post objects under the property posts.
        isLoading:false,
        hasError:false,
    }, 
    reducers:()=>{},
    extraReducers:{
        [fetchPostsBySubreddit.pending]:(state)=>{
            state.isLoading=true;
            state.hasError=false;
        },
        [fetchPostsBySubreddit.error]:(state)=>{
            state.isLoading=false;
            state.hasError=true;
        },
        [fetchPostsBySubreddit.fulfilled]:(state, action)=>{
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError=false;
        }
    }

}

const postsSlice = createSlice(options);

export default postsSlice.reducers();


