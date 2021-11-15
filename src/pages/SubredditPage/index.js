import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { selectSearch } from '../../features/Search/searchSlice';
import { fetchPostsBySubreddits , selectPosts , selectPostsError} from '../../features/Posts/postsSlice';
import { useDispatch , useSelector  } from 'react-redux';
import { useHistory } from 'react-router';

export function SubredditPage(){
    /* 
    with the C.A.T in postSlice, check for subreddit's posts in store before deciding to make an api call
    to populate store with posts of specific subreddit.
    
    condition 1 is if there aren't any (and app hasn't already made an api call to specific URL 
    which resulted in an error ).
    condition 2 is if there is just one matching post and also one set of comments that belongs to the post in store, 
    in which case user landed on the url for that post first and app would need to fetch subreddit posts. 
    
    filter subreddit posts by searchTerm and passes on a list of post ids to <Page /> , 
    along with pageType, and subreddit name extracted from the url params. 
    */

    const dispatch = useDispatch();
    const history = useHistory();
    // page type and params
    const pageType = "subreddit";
    const { subreddit } = useParams();
    const params = {subreddit:subreddit, postId:null}

    const error = useSelector(selectPostsError);
    
    // posts and derivatives
    const posts = useSelector(selectPosts); // once posts is updated, this page would rerender and pass filteredPost as props to page. 
    
    // searchTerm
    const searchTerm = useSelector(selectSearch);
    
    const postIds = posts
                        .filter(post => post.subreddit === subreddit)
                        .filter(post => {
                            if(searchTerm){
                                return post.title.toLowerCase().includes(searchTerm.toLowerCase())
                            }else{
                                return post;
                            }
                        })
                        .map(post => post.id);


    useEffect(()=>{
        // dispatch action in C.A.T to make API call if - 
        // if subreddit posts equal to 0, (assuming this reddit's posts are not loaded in inital api call)
        // if subredditPosts equal to 1 and comment matches post id (assuming this is loading data for a specific post by landing on the url for that post first thing)
        // call api to get that subreddit's posts. 
        // unless there is a fetch post error, in which case do not execute callback in effect.  
        
        if (error === null ){
            dispatch(fetchPostsBySubreddits([subreddit]));
        }
    },[error, subreddit, history, dispatch]);
   
    return (
        <Page type={pageType} params={params} postIds={postIds} />
    );
}
