import { Subreddit } from '../../components/Subreddit';
export function Subreddits(){
    const sub1 = {
        name:'javascript',
    }
    const sub2 = {
        name:'webdev',
    }
    const sub3 = {
        name:'reactjs',
    }
    const sub4={
        name:'learnprogramming',
    }
    const sub5={
        name:'Programminghumor'
    }
    const subreddits = [sub1, sub2, sub3, sub4, sub5];
    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits.map(subreddit => <Subreddit data={subreddit} />)}
        </div>       
    );
}