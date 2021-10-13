import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';

export function Page(props){
    const subRedditName = 'webdev'
    return (
        <>  
            {true && <Banner name={subRedditName}/>}
            <main>       
                <div className="feed">
                    <Posts  />
                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
