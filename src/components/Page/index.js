import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';

export function Page(props){
    const { type } = props;
    const isSubredditPage = type === "subreddit";
    const subRedditName = 'webdev'

    return (
        <>  
            { isSubredditPage && <Banner name={subRedditName}/>}
            <main>       
                <div className="feed">
                    <Posts  pageType={type} params={props.params}/>
                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
