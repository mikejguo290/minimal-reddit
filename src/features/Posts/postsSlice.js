import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addComments } from '../Comments/commentsSlice';
import redditAPI from '../../utils/redditAPI';

// returns list of posts from each subreddit merged into an overall list. 
export const fetchPostsBySubreddits = createAsyncThunk(
    'posts/fetchPostsBySubreddits',
    async(subreddits)=>{
        try{
            const posts = await Promise.all(subreddits.map(subreddit => redditAPI.getPosts(subreddit))); // returns list of lists. 
           
            let mergedPosts=[]
            posts.forEach(subredditPosts => mergedPosts.push(...subredditPosts)); // merge list so that posts from each subreddit alternates. 
            return mergedPosts;
        }catch(error){
            console.log(error);
        }
    }
);

export const fetchPostsBySubredditAndPostId = createAsyncThunk(
    'posts/fetchPostsBySubredditAndPostId',
    async({subreddit, postId},thunkAPI)=>{
        const data = await redditAPI.getPostDetail(subreddit, postId);
        const posts = data.posts;
        const comments = data.comments;
        const payload = {postId:postId, comments: comments,}
        thunkAPI.dispatch(addComments(payload));
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
        [fetchPostsBySubreddits.pending]:(state)=>{
            state.isLoading=true;
            state.hasError=false;
        },
        [fetchPostsBySubreddits.error]:(state)=>{
            state.isLoading=false;
            state.hasError=true;
        },
        [fetchPostsBySubreddits.fulfilled]:(state, action)=>{
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


