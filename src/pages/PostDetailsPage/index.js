import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { fetchPostsBySubredditAndPostId, selectPosts , selectPostsError } from '../../features/Posts/postsSlice';
import { fetchComments, clearComments } from '../../features/Comments/commentsSlice';
import { selectSearch } from '../../features/Search/searchSlice';
import { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function PostDetailsPage(){
    const pageType = "detail";
    const { subreddit, postId } = useParams();
    const params = {subreddit:subreddit, postId:postId};
    const dispatch = useDispatch();

    const posts = useSelector(selectPosts); // once posts is updated, this page would rerender and pass filteredPost as props to page. 
    const searchTerm = useSelector(selectSearch);
    
    const filteredPost = posts.filter(post => post.id === postId)

    // have to create an extra variable so as not to trigger the api call in the useEffect, 
    // which takes place when filteredPost.length===0. 

    const searchFilteredPost = filteredPost.filter(post => {
        if(searchTerm){
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        }else{
            return post;
        }
    });

    const postIds = searchFilteredPost.map(post => post.id);

    const error = useSelector(selectPostsError); // error is either false or an obj { name, message, stack }
    const errorMessage = error? error.message : ''; 
    
    useLayoutEffect(()=>{
        // clear comments in store before component is mounted. 
        // This is to stop state comment data flickering before loading begins. 
        dispatch(clearComments());
    },[dispatch]);

    useEffect(()=>{
        // if the post isn't in list of posts. make an api call. else, pass on filtered post as props down to be rendered by Posts component. 
        // this means the app renders posts in subreddits quickly for the PostDetailsPage, going back to subreddits page. 
        // and can also deal with users who try the url route. saved pages. similarity to reddit urls etc. 
        if(filteredPost.length===0 && !errorMessage){
            dispatch(fetchPostsBySubredditAndPostId({subreddit:subreddit, postId:postId}));
        }
    },[dispatch, subreddit, postId, filteredPost.length, errorMessage]);

    useEffect(()=>{
        dispatch(fetchComments({subreddit:subreddit, postId:postId}));
    },[dispatch, subreddit,postId]);

    return (
        <Page type={pageType} params={params} postIds={postIds} />
    );
}