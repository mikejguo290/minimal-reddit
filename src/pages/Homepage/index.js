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
    // convert it to a json string first before passing it to the dependency array. still get loads of warnings!

    const posts = useSelector(selectPosts);
    const searchTerm = useSelector(selectSearch);
    const filteredPosts = posts.filter(post => {
        if(searchTerm){
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        }else{
            return post;
        }
    });

    // if render number calculated with useRef > 1, postIds=[], in useEffect, set postIds.
    const postIds = mixPosts(filteredPosts);
    //console.log(postIds);

    // effect runs on every render of Homepage. 
    /* cannot use subredditsList as a dependency array because it is a list and each rerender would 
    get a different list (as it appears to javascript,) causing the effect to be run, causing another rerender and so on.
    To get out of infinite rerenders, the dependency array uses an expression based on subredditsList. 
    JSON.stringify(s) converts array into string of ["javascript","webdev","reactjs","learnprogramming","ProgrammerHumor"]
    which doesn't change even when a new array is fetched with the useSelector(selectSubreddits); 
    The effect will once every render plus whenever subredditList's contents change. 
    */

    useLayoutEffect(()=>{
        // useLayoutEffect differs from useEffect in that it runs before React paints.
        // the effect introduces DOM mutations (api call) which change the appearance of the DOM between component first rendering (with old data) and when API call finishes (with new data).
        // useEffect runs only after the component renders with old data, which introduces a visual glitch before the component then displays loading skeletons.
        // useLayoutEffect fires in the same phase as componentDidMount and componentDidUpdate. Before a component is visusally displayed to user.
        dispatch(fetchPostsBySubreddits(subredditsList));
    },[dispatch, JSON.stringify(subredditsList)]);

    return (
        <Page type={pageType} params={params} postIds={postIds} />
    );
}

