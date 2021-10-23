import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { fetchPostsBySubreddit , selectPosts } from '../../features/Posts/postsSlice';
import { useDispatch , useSelector  } from 'react-redux'

export function SubredditPage(){
    const pageType = "subreddit"
    const { subreddit } = useParams();
    const params = {subreddit:subreddit, postId:null}
    const posts = useSelector(selectPosts); // once posts is updated, this page would rerender and pass filteredPost as props to page. 
    const filteredPosts = posts.filter(post => post.subreddit === subreddit); 

    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(filteredPosts.length<=1){
            // if subreddit posts less than or equal to 1, call api again. this is vulnerable to misspellings causing endless api calls.
            // or if subreddit has no posts or just one post. 
            dispatch(fetchPostsBySubreddit(subreddit))
        }
    },[subreddit,filteredPosts, dispatch]);

    return (
        <Page type={pageType} params={params} posts={filteredPosts}/>
    );
}
