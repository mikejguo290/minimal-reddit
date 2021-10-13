import { Subreddit } from '../../components/Subreddit';
export function Subreddits(){
    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            <Subreddit />
            <Subreddit />
        </div>       
    );
}