import React from 'react';
import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';

export function Page(props){
    const { type, params } = props;
    const isSubredditPage = type === "subreddit";
    const subRedditName = params.subreddit;

    return (
        <>  
            { isSubredditPage && <Banner name={subRedditName}/>}
            <main>       
                <div className="feed">
                    <Posts  pageType={type} />
                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
