import React from 'react';
import { Subreddit } from '../../components/Subreddit';
import { NavLink } from 'react-router-dom';
export function Subreddits(){
    const sub1 = {
        name:'javascript', /* subreddit display name */
        id:'1',
    }
    const sub2 = {
        name:'webdev',
        id:'2', 
    }
    const sub3 = {
        name:'reactjs',
        id:'3', 
    }
    const sub4={
        name:'learnprogramming',
        id:'4',
    }
    const sub5={
        name:'ProgrammerHumor',
        id:5,
    }
    const subreddits = [sub1, sub2, sub3, sub4, sub5];
    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            <ul className="redditsList">
            {
                subreddits.map(subreddit => {
                    return (
                        <li key={subreddit.id}>
                            <NavLink to={`/r/${subreddit.name}`} className="subredditNav" activeClassName="selectedSubreddit" > 
                                <Subreddit data={subreddit} />
                            </NavLink>
                        </li>
                    )
                })
            }
            </ul>
        </div>       
    );
}