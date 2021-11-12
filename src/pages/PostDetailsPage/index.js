import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { fetchPostsBySubredditAndPostId, selectPosts , selectPostsError } from '../../features/Posts/postsSlice';
import { fetchComments } from '../../features/Comments/commentsSlice';
import { selectSearch } from '../../features/Search/searchSlice';
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function PostDetailsPage(){
    const pageType = "detail";
    const { subreddit, postId } = useParams();
    const dispatch = useDispatch();

    const posts = useSelector(selectPosts); // once posts is updated, this page would rerender and pass filteredPost as props to page. 
    const error = useSelector(selectPostsError); // error is either false or an obj { name, message, stack }
    const searchTerm = useSelector(selectSearch);
    
    const postIds = posts
                        .filter(post => post.id === postId) // filter by postId in url params
                        .filter(post => searchTerm // filter by searchTerm
                            ?post.title.toLowerCase().includes(searchTerm.toLowerCase())
                            :post
                        )
                        .map(post => post.id); // map to array of post ids.    
  
    // UseLayoutEffect runs before component paints. This is to stop state comment data flickering before loading begins. 
    useLayoutEffect(()=>{
        if(error === null){
            dispatch(fetchPostsBySubredditAndPostId({subreddit:subreddit, postId:postId}));
        }
    },[dispatch, subreddit, postId, error]);

    useLayoutEffect(()=>{
        dispatch(fetchComments({subreddit:subreddit, postId:postId}));
    },[dispatch, subreddit,postId]);

    return (
        <Page type={pageType} params={{subreddit:subreddit, postId:postId}} postIds={postIds} />
    );
}