import redditImage from '../../images/reddit.jpeg'

export function Subreddit(){
    return (
        <div className="subreddit">
            <figure>
                <img src={redditImage} alt='subreddit icon' />
            </figure>
            <h3>Javascript</h3>
        </div>
    )
}