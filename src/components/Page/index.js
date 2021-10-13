import { Subreddits } from '../../features/Subreddits';
import { Posts } from '../../features/Posts';
import { Banner } from '../Banner';

export function Page(props){
    const post1 = {
        votes: 2000,
        subreddit:'javascript',
        title:'more frameworks required',
        introText:'The world cries out for more javascript frameworks during frameworks shortage.',
        postedTime:'6 hours ago',
        comments:[],
    };

    const post2 = {
        votes: 3000,
        subreddit:'javascript',
        title:'Is PHP better?',
        introText:'Should I learn PHP instead of Javascript?',
        postedTime:'3 hours ago',
        comments:[],
    };

    const post3 = {
        votes: 30,
        subreddit:'javascript',
        title:'JQuery use finally peaked in 2021 ',
        introText:'JQuery decline has begun. We owe JQuery a huge debt',
        postedTime:'1 hours ago',
        comments:[],
    };
    
    const posts = [post1, post2, post3 ]

    return (
        <>  
            {true && <Banner />}
            <main>       
                <div className="feed">
                    <Posts posts={posts}/>
                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
