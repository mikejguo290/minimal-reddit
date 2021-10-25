import { createSlice } from '@reduxjs/toolkit';

const sub1 = {
    name:'javascript', /* subreddit display_name */
    display_name_prefixed: "r/javascript",
    id:'t5_2qh30', /* match to subreddit name */
}
const sub2 = {
    name:'webdev',
    display_name_prefixed: "r/webdev",
    id:'t5_2qs0q', 
}
const sub3 = {
    name:'reactjs',
    display_name_prefixed: "r/reactjs",
    id:'t5_2zldd', 
}
const sub4={
    name:'learnprogramming',
    display_name_prefixed: "r/learnprogramming",
    id:'t5_2r7yd',
}
const sub5={
    name:'ProgrammerHumor',
    display_name_prefixed: "r/ProgrammerHumor",
    id:'t5_2tex6',
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