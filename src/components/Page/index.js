import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';

export function Page(props){

    return (
        <>  
            {true && <Banner />}
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
