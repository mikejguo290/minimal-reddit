import React from 'react';
import { Page } from '../../components/Page';
import { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { fetchPostsBySubreddit , selectPosts } from '../../features/Posts/postsSlice';

export function Homepage(){
    const pageType = "home"
    const params = {subreddit:null, postId:null}
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPostsBySubreddit('webdev'));
    },[dispatch]);

    const posts = useSelector(selectPosts);

    return (
        <Page type={pageType} params={params} posts={posts}/>
    );
}

