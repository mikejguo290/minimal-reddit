import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import redditAPI from '../../utils/redditAPI';

export const fetchPostsBySubreddit = createAsyncThunk(
    'posts/fetchPostsBySubreddit', 
    async(subreddit)=>{
        const posts = await redditAPI.getPosts(subreddit);
        return posts;
    }
);

export const fetchPostsBySubredditAndPostId = createAsyncThunk(
    'posts/fetchPostsBySubredditAndPostId',
    async({subreddit, postId},thunkAPI)=>{
        const data = await redditAPI.getPostDetail(subreddit, postId);
        const posts = data.posts;
        const comments = data.comments;
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
    reducers:{},
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
        },
        [fetchPostsBySubredditAndPostId.pending]:(state)=>{
            state.isLoading=true;
            state.hasError=false;
        },
        [fetchPostsBySubredditAndPostId.error]:(state)=>{
            state.isLoading=false;
            state.hasError=true;
        },
        [fetchPostsBySubredditAndPostId.fulfilled]:(state, action)=>{
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError=false;
        },
    }

}

const postsSlice = createSlice(options);

export const selectPosts = state => state.posts.posts;
export const selectIsLoadingStatus = state => state.posts.isLoading;
export default postsSlice.reducer;


