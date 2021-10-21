import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import redditAPI from '../../utils/redditAPI';
import { useEffect } from 'react'

export function SubredditPage(){
    const pageType = "subreddit"
    const { subreddit } = useParams();
    const params = {subreddit:subreddit, postId:null}
    useEffect(()=>{
        const fetchPosts = async()=>{
            const posts = await redditAPI.getPosts(subreddit);
            console.log(posts);
        }
        fetchPosts();
    },[subreddit]);

    return (
        <Page type={pageType} params={params} />
    );
}
