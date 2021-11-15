import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import redditAPI from '../../utils/redditAPI';

// returns comment details from call to reddit json api for each individual post. 
// i.e. when navigating to /r/subreddit_x/comments/postId/
// complements fetchPostsBySubredditAndPostId which only returns post details
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async({subreddit,postId})=>{
            const data = await redditAPI.getPostDetail(subreddit, postId);
            const comments = data.comments;
            const payload = {postId: postId, comments:comments}
            return payload;
        }
    );

const options = {
    name:'comments',
    initialState:{
        comments:{},
        isLoading:false,
        error:null,
    }, // comments 's {} is obj with post id for keys and list of replies for the values for each key/post id
    reducers:{
        addComments:(state, action)=>{
            const { postId, comments } = action.payload; 
            state.comments[postId] = comments;
        },
        clearComments:(state) => {
            state.comments={};
        },
        resetError:(state) => {
            state.error = null;
        }
    },
    extraReducers:{
        [fetchComments.pending]:(state)=>{
            state.isLoading = true;
            state.error = null;
        },
        [fetchComments.rejected]:(state, action)=>{
            state.isLoading = false;
            state.error = action.error;
        },
        [fetchComments.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.error = null;
            const { postId, comments } = action.payload;
            state.comments[postId] = comments;
        },
    }
}

const commentsSlice = createSlice(options);

export const selectComments = state => state.comments.comments; // gives object { postId_x: comments_x, etc }
export const selectCommentsIsLoading = state => state.comments.isLoading; 
export const selectCommentsError = state => state.comments.error; 
export const { addComments , clearComments, resetError } = commentsSlice.actions;
export default commentsSlice.reducer;