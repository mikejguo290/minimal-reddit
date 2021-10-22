import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import redditAPI from '../../utils/redditAPI';
import { fetchPostsBySubredditAndPostId } from '../../features/Posts/postsSlice';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function PostDetailsPage(){
    const pageType = "detail";
    const { subreddit, postId } = useParams();
    const params = {subreddit:subreddit, postId:postId};
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPostsBySubredditAndPostId({subreddit:subreddit, postId:postId}));
    },[dispatch,subreddit,postId])

    return (
        <Page type={pageType} params={params} />
    );
}