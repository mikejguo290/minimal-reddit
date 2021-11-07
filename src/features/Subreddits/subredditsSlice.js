import { createSlice } from '@reduxjs/toolkit';

const sub1 = {
    name:'javascript', /* subreddit display_name */
    display_name_prefixed: "r/javascript",
    id:'t5_2qh30', /* match to subreddit name */
    community_icon:'',
    icon_img:'https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png',
}
const sub2 = {
    name:'webdev',
    display_name_prefixed: "r/webdev",
    id:'t5_2qs0q', 
    community_icon:'https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_5ey8lzmwmxp21.png',
    icon_img:'',
}

const sub3 = {
    name:'reactjs',
    display_name_prefixed: "r/reactjs",
    id:'t5_2zldd', 
    community_icon:'https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png',
    icon_img:'',
}

const sub4={
    name:'learnprogramming',
    display_name_prefixed: "r/learnprogramming",
    id:'t5_2r7yd',
    community_icon:'',
    icon_img:'',
}

const sub5={
    name:'ProgrammerHumor',
    display_name_prefixed: "r/ProgrammerHumor",
    id:'t5_2tex6',
    community_icon:'https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png',
    icon_img:'https://b.thumbs.redditmedia.com/Qj8PVGSQ_B_3JjNCeE-bxz-RVokmZQ23i8cNGRw7Nhc.png',
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