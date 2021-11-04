import React from 'react';
import { Page } from '../../components/Page';
import { useEffect } from 'react'
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

    useEffect(()=>{
        dispatch(fetchPostsBySubreddits(subredditsList));
    },[dispatch, JSON.stringify(subredditsList)]);
    
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

    return (
        <Page type={pageType} params={params} postIds={postIds} />
    );
}

