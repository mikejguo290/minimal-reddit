
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

    /* 
    let page know if a request came in to view detailed Page view. this should be an attribute of a specific Post object.
    to allow for viewing comments in homepage or subreddit, without clicking through to PostDetail page.
    */
    let postDetail = true; 

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
                { postDetail && <Comments />}
                {/* end of comments */}
            </div>
        </div>
    )
}