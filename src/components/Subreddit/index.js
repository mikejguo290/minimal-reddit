import redditImage from '../../images/reddit.jpeg';
import React from 'react';

export function Subreddit(props){
    const { name, community_icon, icon_img } = props.data;

    // use community_icon before icon_img and if both are absent, use the backup icon url.
    const backupIconUrl = 'https://styles.redditmedia.com/t5_fl7c8/styles/communityIcon_mb09ajfn63241.png'
    const subredditIconUrl = community_icon || icon_img || backupIconUrl;
    return (
        <div className="subreddit">
            <figure>
                <img className="subredditIcon" src={subredditIconUrl} alt='subreddit icon' />
            </figure>
            <h3>{name}</h3>
        </div>
    )
}