import React from 'react';
import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';
import { useSelector } from 'react-redux';
import { selectIsLoadingStatus } from '../../features/Posts/postsSlice';

export function Page(props){
    const { type, params, posts } = props;
    const isSubredditPage = type === "subreddit";
    const subRedditName = params.subreddit;
    const isLoading = useSelector(selectIsLoadingStatus);
    return (
        <>  
            { isSubredditPage && <Banner name={subRedditName}/>}
            <main>       
                <div className="feed">
                    <Posts  pageType={type} posts={posts} />
                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
