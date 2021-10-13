import redditImage from '../../images/reddit.jpeg'

export function Subreddit(props){
    const { name } = props.data;
    return (
        <div className="subreddit">
            <figure>
                <img src={redditImage} alt='subreddit icon' />
            </figure>
            <h3>{name}</h3>
        </div>
    )
}