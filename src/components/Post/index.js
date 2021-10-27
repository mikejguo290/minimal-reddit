import React from 'react';
import { Comments } from '../../features/Comments';
import { Link } from 'react-router-dom';
import { convertNumberToStringThousands, createMarkup } from '../../utils/helper';
import ReactTimeAgo from 'react-time-ago';

export function Post(props){
    const {
        id,
        permalink,
        subreddit,
        subreddit_name_prefixed,
        votes,
        title,
        selftext_html,
        author,
        created_utc,
    } = props.data;

    /* 
    let page know if a request came in to view detailed Page view. this should be an attribute of a specific Post object.
    to allow for viewing comments in homepage or subreddit, without clicking through to PostDetail page.
    */
    const isPostDetailView= props.pageType==="detail"; 
    const selfTextHtmlExists = selftext_html !=null;
    return (
        <div className="post">
            <div className="postVotes">
                <p>{convertNumberToStringThousands(votes)}</p>
            </div>
            <div className="postContext">
                <Link to={`/r/${subreddit}`} >
                    <p className='postSubreddit'>{subreddit_name_prefixed}</p>
                </Link>
                <Link to={permalink} className="postLink">
                    <h3>{title}</h3>
                </Link>
                { isPostDetailView && selfTextHtmlExists && <div class="selftextHtml" dangerouslySetInnerHTML={createMarkup(selftext_html)} />}
                <div className="postmetaData">
                    <div>
                        <p>By {author}</p>
                        <ReactTimeAgo date={created_utc*1000} locale="en-GB" timeStyle="mini-minute-now"/>
                    </div>
                    <Link to={permalink} className="postLink">
                        <p>Comments</p>
                    </Link>
                </div>
                {/* start of comments */}
                { isPostDetailView && <Comments postId={id}/>}
                {/* end of comments */}
            </div>
        </div>
    )
}