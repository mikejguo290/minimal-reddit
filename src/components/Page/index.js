import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';
import { selectIsLoadingStatus, selectPostsError } from '../../features/Posts/postsSlice';
import { clearSearchTerm } from '../../features/Search/searchSlice';

export function Page(props){
    const { type, params, postIds } = props;
    const isSubredditPage = type === "subreddit";
    const subRedditName = params.subreddit;
    const isLoading = useSelector(selectIsLoadingStatus);
    const error = useSelector(selectPostsError);
    const dispatch = useDispatch();

    useEffect(()=>{
        // clear search term whenever user navigates to a different page/url.
        dispatch(clearSearchTerm());
    },[dispatch, params.subreddit, params.postId]);

    return (
        <>  
            { isSubredditPage && <Banner name={subRedditName}/>}
            <main>  
                <div className="feed">
                    { error && <div className="errorMessage">{error.message}</div> }
                    { !error && <Posts  pageType={type} postIds={postIds} /> }
                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
