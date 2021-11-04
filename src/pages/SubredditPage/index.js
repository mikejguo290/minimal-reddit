import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { selectSearch } from '../../features/Search/searchSlice';
import { fetchPostsBySubreddits , selectPosts , selectPostsError} from '../../features/Posts/postsSlice';
import { useDispatch , useSelector  } from 'react-redux'

export function SubredditPage(){
    const pageType = "subreddit"
    const { subreddit } = useParams();
    const params = {subreddit:subreddit, postId:null}
    
    const posts = useSelector(selectPosts); // once posts is updated, this page would rerender and pass filteredPost as props to page. 
    const searchTerm = useSelector(selectSearch);
    const subredditPosts = posts.filter(post => post.subreddit === subreddit); 

    // important to decouple subredditPosts from filteredPosts. 
    // the former is used to create the latter but they both have distinct uses. 
    // subredditsPosts.length ===0 can trigger an api call to fetch more posts
    // whilst filteredPosts are always used to create list of postIds passed to Page.
    const filteredPosts = subredditPosts.filter(post => {
        if(searchTerm){
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        }else{
            return post;
        }
    });
    
    const postIds = filteredPosts.map(post => post.id);

    const dispatch = useDispatch();
    const error = useSelector(selectPostsError);
  
    useEffect(()=>{
        if( !error && subredditPosts.length ===0){
            // if subreddit posts equal to 0, (assuming this reddit's posts are not loaded in inital api call)
            // call api to get that subreddit's posts. 
            // unless there is a fetch post error, in which case do not execute callback in effect.  
            
            // what if subreddit has one or zero post? 
            dispatch(fetchPostsBySubreddits([subreddit]));
        }
    },[error, subreddit,subredditPosts, dispatch]);

    return (
        <Page type={pageType} params={params} postIds={postIds} />
    );
}
