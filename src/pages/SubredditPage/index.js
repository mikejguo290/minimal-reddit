import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { selectSearch } from '../../features/Search/searchSlice';
import { fetchPostsBySubreddits , selectPosts } from '../../features/Posts/postsSlice';
import { useDispatch , useSelector  } from 'react-redux'

export function SubredditPage(){
    const pageType = "subreddit"
    const { subreddit } = useParams();
    const params = {subreddit:subreddit, postId:null}
    
    const posts = useSelector(selectPosts); // once posts is updated, this page would rerender and pass filteredPost as props to page. 
    const searchTerm = useSelector(selectSearch);
    let filteredPosts = posts.filter(post => post.subreddit === subreddit); 
    const postIds = filteredPosts.map(post => post.id);

    filteredPosts = filteredPosts.filter(post => {
        if(searchTerm){
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        }else{
            return post;
        }
    });

    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(filteredPosts.length<=1){
            // if subreddit posts less than or equal to 1, call api to get reddits. this is vulnerable to misspellings causing endless api calls.
            // or if subreddit has no posts or just one post. 
            dispatch(fetchPostsBySubreddits([subreddit]));
        }
    },[subreddit,filteredPosts, dispatch]);

    return (
        <Page type={pageType} params={params} posts={filteredPosts} postIds={postIds} />
    );
}
