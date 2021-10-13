import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';

export function Page () {
    return (
        <>
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
