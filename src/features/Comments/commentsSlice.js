import { createSlice } from '@reduxjs/toolkit'

const options = {
    name:'comments',
    initialState:{comments:{}}, // comments 's {} is obj with post id for keys and list of replies for the values for each key/post id
    reducers:{}
}

const commentsSlice = createSlice(options);

export default commentsSlice.reducer;