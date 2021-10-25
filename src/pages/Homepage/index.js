import React from 'react';
import { Page } from '../../components/Page';
import { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { fetchPostsBySubreddits , selectPosts } from '../../features/Posts/postsSlice';
import { selectSearch } from '../../features/Search/searchSlice';

export function Homepage(){
    const pageType = "home"
    const params = {subreddit:null, postId:null}
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPostsBySubreddits(['webdev', 'reactjs']));
    },[dispatch]);
    
    const posts = useSelector(selectPosts);
    const searchTerm = useSelector(selectSearch);
    const filteredPosts = posts.filter(post => {
        if(searchTerm){
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        }else{
            return post;
        }
    });

    return (
        <Page type={pageType} params={params} posts={filteredPosts}/>
    );
}

