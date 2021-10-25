import React from 'react';
import { Subreddit } from '../../components/Subreddit';
import { NavLink } from 'react-router-dom';
import { selectSubreddits } from './subredditsSlice';
import { useSelector } from 'react-redux';

export function Subreddits(){
    const subreddits = useSelector(selectSubreddits);
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