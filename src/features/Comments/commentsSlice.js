import { createSlice } from '@reduxjs/toolkit'

const options = {
    name:'comments',
    initialState:{comments:{}}, // comments 's {} is obj with post id for keys and list of replies for the values for each key/post id
    reducers:{
        addComments:(state, action)=>{
            const { postId, comments } = action.payload; 
            state.comments[postId] = comments;
        }
    }
}

const commentsSlice = createSlice(options);

export const selectComments = state => state.comments.comments; // gives object { postId_x: comments_x, etc }
export const { addComments } = commentsSlice.actions;
export default commentsSlice.reducer;