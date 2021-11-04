import React from 'react';
import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';
import { useSelector } from 'react-redux';
import { selectIsLoadingStatus, selectPostsError } from '../../features/Posts/postsSlice';

export function Page(props){
    const { type, params, postIds } = props;
    const isSubredditPage = type === "subreddit";
    const subRedditName = params.subreddit;
    const isLoading = useSelector(selectIsLoadingStatus);
    const error = useSelector(selectPostsError);
    
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
