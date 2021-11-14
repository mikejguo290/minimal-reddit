import React from 'react';
import { Page } from '../../components/Page';
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { fetchPostsBySubreddits , selectPosts } from '../../features/Posts/postsSlice';
import { selectSearch } from '../../features/Search/searchSlice';
import { selectSubreddits } from '../../features/Subreddits/subredditsSlice';
import { mixPosts } from '../../utils/helper'

export function Homepage(){
    const pageType = "home"
    const params = {subreddit:null, postId:null}
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const subredditsList = subreddits.map(subreddit => subreddit.name);
    // array (subredditsList) is an object. do not use it as a dependency. otherwise infinite useEffect loop.

    const posts = useSelector(selectPosts);
    const searchTerm = useSelector(selectSearch);
    const filteredPosts = posts.filter(post => {
        if(searchTerm){
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        }else{
            return post;
        }
    });

    const postIds = mixPosts(filteredPosts);

    // effect runs on every render of Homepage. 
    /* cannot use subredditsList as a dependency array because it is a list and each rerender would 
    get a different list (as it appears to javascript,) causing infinite rerenders
    JSON.stringify(s) converts array into string of ["javascript","webdev","reactjs","learnprogramming","ProgrammerHumor"]
    which doesn't change until subredditList's contents actually change. 
    */
    
    useLayoutEffect(()=>{
        // the effect (api call) introduces DOM mutations which change the appearance of the DOM between component first rendering (with old data) and when API call finishes (with new data).
        // useLayoutEffect differs from useEffect in that it runs before React paints.
        // useEffect runs only after the component initially renders with old data, which introduces a visual glitch before loading skeletons displays.
        dispatch(fetchPostsBySubreddits(subredditsList));
    },[dispatch, JSON.stringify(subredditsList)]);

    return (
        <Page type={pageType} params={params} postIds={postIds} />
    );
}

