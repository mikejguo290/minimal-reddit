import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import redditAPI from '../../utils/redditAPI';

// returns list of posts from each subreddit merged into an overall list. 
export const fetchPostsBySubreddits = createAsyncThunk(
    'posts/fetchPostsBySubreddits',
    async(subreddits)=>{
        const posts = await Promise.all(subreddits.map(subreddit => redditAPI.getPosts(subreddit))); // returns list of lists. 
        let mergedPosts=[]
        posts.forEach(subredditPosts => mergedPosts.push(...subredditPosts)); // merge list so that posts from each subreddit alternates. 
        return mergedPosts;
    }
);
// returns post details from call to reddit json api for each individual post. 
// i.e. when navigating to /r/subreddit_x/comments/postId/
// can also return comments but separated that into a C.A.T for comments
export const fetchPostsBySubredditAndPostId = createAsyncThunk(
    'posts/fetchPostsBySubredditAndPostId',
    async({subreddit, postId})=>{
        const data = await redditAPI.getPostDetail(subreddit, postId);
        const posts = data.posts;
        return posts;
    }
);

const options = {
    name: 'posts',
    initialState: {
        posts:[], // array of post objects under the property posts.
        isLoading:false,
        error:null,
    }, 
    reducers:{
        resetError:(state)=>{
            state.error = null;
        }
    },
    extraReducers:{
        [fetchPostsBySubreddits.pending]:(state)=>{
            state.isLoading=true;
            state.error=null;
        },
        [fetchPostsBySubreddits.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.error; //if the promise failed and was not handled with rejectWithValue, dispatch the rejected action with a serialized version of the error value as action.error
        },
        [fetchPostsBySubreddits.fulfilled]:(state, action)=>{
            state.posts = action.payload;
            state.isLoading = false;
            state.error=null;
        },
        [fetchPostsBySubredditAndPostId.pending]:(state)=>{
            state.isLoading=true;
            state.error=null;
        },
        [fetchPostsBySubredditAndPostId.rejected]:(state, action)=>{
            state.isLoading=false;
            state.error=action.error;
        },
        [fetchPostsBySubredditAndPostId.fulfilled]:(state, action)=>{
            // if no post id can match the payload.id, only then, add the post in action.payload to state.posts
            // doesn't quite work at the moment as the only way to navigate to new post is via reloading url which wipes the store of previously saved posts!
            // to navigate fast between (just) individual subreddit and the new post, would need a way of accessing the url without reloading. 
            if (!state.posts.find(post => post.id === action.payload.id)){
                state.posts.push(...action.payload);
            }
            state.isLoading = false;
            state.error = null;
        },
    }

}

const postsSlice = createSlice(options);

export const selectPosts = state => state.posts.posts;
export const selectIsLoadingStatus = state => state.posts.isLoading;
export const selectPostsError = state => state.posts.error;
export const { resetError } = postsSlice.actions;
export default postsSlice.reducer;


