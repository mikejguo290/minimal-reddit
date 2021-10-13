
import { Comments } from '../../features/Comments';
export function Post(props){
    const {
        votes,
        subreddit,
        title,
        introText,
        author,
        postedTime,
        comments,
    } = props.data;

    return (
        <div className="post">
            <div className="postVotes">
                <p>{votes}</p>
            </div>
            <div className="postContext">
                <p>{subreddit}</p>
                <h3>{title}</h3>
                <p>{introText}</p>
                <div className="postmetaData">
                    <p>By {author}</p>
                    <p>{postedTime}</p>
                    <p>Comments</p>
                </div>
                {/* start of comments */}
                <Comments />
                {/* end of comments */}
            </div>
        </div>
    )
}