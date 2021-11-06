import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { selectSearch } from '../../features/Search/searchSlice';
import { fetchPostsBySubreddits , selectPosts , selectPostsError} from '../../features/Posts/postsSlice';
import { selectComments } from '../../features/Comments/commentsSlice';

import { useDispatch , useSelector  } from 'react-redux'

export function SubredditPage(){
    /* 
    checks for subreddit's posts in store before deciding to make an api call to fetch posts to populate
    store's posts for specific subreddit.
    
    condition 1 is if there aren't any (and app hasn't already made an api call to specific URL 
    which resulted in an error ).
    condition 2 is if there is just one matching post and also one set of comments for that post in store, 
    in which case user landed on the url for that post first and app would need to fetch subreddit posts. 
    
    filter subreddit posts by searchTerm and passes on a list of post ids to <Page /> , 
    along with pageType, and subreddit name extracted from the url params. 
    */
    const dispatch = useDispatch();
    const pageType = "subreddit"
    const { subreddit } = useParams();
    const params = {subreddit:subreddit, postId:null}
    
    const posts = useSelector(selectPosts); // once posts is updated, this page would rerender and pass filteredPost as props to page. 
    const searchTerm = useSelector(selectSearch);
    const subredditPosts = posts.filter(post => post.subreddit === subreddit); 
    const subPostsInStore = subredditPosts.length;
    // important to decouple subredditPosts from filteredPosts.  even though the second is derived from the first.
    // subredditsPosts.length can trigger an api call to fetch more posts
    // whilst filteredPosts is used to create list of postIds passed to <Page />.
    const filteredPosts = subredditPosts.filter(post => {
        if(searchTerm){
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        }else{
            return post;
        }
    });
    
    const postIds = filteredPosts.map(post => post.id);

    // fetch posts error
    const error = useSelector(selectPostsError);
    // comments 
    const comments = useSelector(selectComments); // { postIdx: [comments of post x]}
    const commentIds = Object.keys(comments) // returns list of postIds 
    const commentMatchPost = subredditPosts.find(post => post.id === commentIds[0] )? true: false;

    useEffect(()=>{
        // if subreddit posts equal to 0, (assuming this reddit's posts are not loaded in inital api call)
        // if subredditPosts equal to 1 and comment matches post id (assuming this is loading data for a specific post by landing on the url for that post first thing)
        // call api to get that subreddit's posts. 
        // unless there is a fetch post error, in which case do not execute callback in effect.  
        if( !error && subPostsInStore === 0 ){
            dispatch(fetchPostsBySubreddits([subreddit]));
        }
        if( !error && subPostsInStore === 1 && commentMatchPost ){
            dispatch(fetchPostsBySubreddits([subreddit]));
        }
    },[error, subreddit, subPostsInStore, commentMatchPost, dispatch]);

    return (
        <Page type={pageType} params={params} postIds={postIds} />
    );
}
