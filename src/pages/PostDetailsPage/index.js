import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { fetchPostsBySubredditAndPostId, selectPosts } from '../../features/Posts/postsSlice';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function PostDetailsPage(){
    const pageType = "detail";
    const { subreddit, postId } = useParams();
    const params = {subreddit:subreddit, postId:postId};
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts); // once posts is updated, this page would rerender and pass filteredPost as props to page. 
    const filteredPost = posts.filter(post => post.id === postId); 
    // if the post isn't in list of posts. make an api call. else, pass on filtered post as props down to be rendered by Posts component. 
    // this means the app renders posts in subreddits very quickly for the PostDetailsPage, going back should be fast too. 
    // and can also deal with users who try the url route. saved pages. similarity to reddit urls etc.
    // it should reduce unnecessary api calls. or at least the user shouldn't notice it because the Post details section shouldn't rerender. just the comments.
    // consider a createAsyncThunk for just getting the comments. rather than replacing all Posts in store. 

    useEffect(()=>{
        if(filteredPost.length===0){
            dispatch(fetchPostsBySubredditAndPostId({subreddit:subreddit, postId:postId}));
        }
    },[dispatch,subreddit,postId, filteredPost])

    return (
        <Page type={pageType} params={params} posts={filteredPost}/>
    );
}