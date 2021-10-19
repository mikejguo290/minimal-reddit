import React from 'react';
import { Comments } from '../../features/Comments';
import { Link } from 'react-router-dom';
export function Post(props){
    const {
        permalink,
        subreddit,
        subreddit_name_prefixed,
        votes,
        title,
        introText,
        author,
        postedTime,
    } = props.data;

    /* 
    let page know if a request came in to view detailed Page view. this should be an attribute of a specific Post object.
    to allow for viewing comments in homepage or subreddit, without clicking through to PostDetail page.
    */
    let isPostDetailView= props.pageType==="detail"; 

    return (
        <div className="post">
            <div className="postVotes">
                <p>{votes}</p>
            </div>
            <div className="postContext">
                <Link to={`/r/${subreddit}`} >
                    <p className='postSubreddit'>{subreddit_name_prefixed}</p>
                </Link>
                <Link to={permalink} className="postLink">
                    <h3>{title}</h3>
                </Link>
                <p>{introText}</p>
                <div className="postmetaData">
                    <p>By {author}</p>
                    <p>{postedTime}</p>
                    <Link to={permalink} className="postLink">
                        <p>Comments</p>
                    </Link>
                </div>
                {/* start of comments */}
                { isPostDetailView && <Comments />}
                {/* end of comments */}
            </div>
        </div>
    )
}