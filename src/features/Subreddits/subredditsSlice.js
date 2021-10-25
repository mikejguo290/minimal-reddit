import { createSlice } from '@reduxjs/toolkit';

const sub1 = {
    name:'javascript', /* subreddit display name */
    id:'1',
}
const sub2 = {
    name:'webdev',
    id:'2', 
}
const sub3 = {
    name:'reactjs',
    id:'3', 
}
const sub4={
    name:'learnprogramming',
    id:'4',
}
const sub5={
    name:'ProgrammerHumor',
    id:5,
}
const subreddits = [sub1, sub2, sub3, sub4, sub5];

const options = {
    name:'subreddits',
    initialState: {subreddits: subreddits}, // subreddits: [] -> array of objects
    reducers:{},
}

const subredditsSlice = createSlice(options);

export const selectSubreddits = state => state.subreddits.subreddits; 
export default subredditsSlice.reducer;