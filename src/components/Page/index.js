import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';

export function Page(props){
    const banner = (
        <div className="banner" >
            <h2>Subreddit Name</h2>
        </div>
    );
    return (
        <>  
            {false && banner}
            <main>       
                <div className="feed">
                    <Posts />
                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
