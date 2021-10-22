import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { fetchPostsBySubreddit } from '../../features/Posts/postsSlice';
import { useDispatch } from 'react-redux'

export function SubredditPage(){
    const pageType = "subreddit"
    const { subreddit } = useParams();
    const params = {subreddit:subreddit, postId:null}
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchPostsBySubreddit(subreddit))
    },[subreddit,dispatch]);

    return (
        <Page type={pageType} params={params} />
    );
}
