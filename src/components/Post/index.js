import React from 'react';
import { useSelector } from 'react-redux';
import { Comments } from '../../features/Comments';
import { selectCommentsError } from '../../features/Comments/commentsSlice';
import { Link } from 'react-router-dom';
import { convertNumberToStringThousands, createMarkup , checkUrlIsImage, checkUrlContainsPostId } from '../../utils/helper';
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
        url,
        num_comments,
    } = props.data;

    /* 
    let page know if a request came in to view detailed Page view. this should be an attribute of a specific Post object.
    to allow for viewing comments in homepage or subreddit, without clicking through to PostDetail page.
    */
    const isPostDetailView= props.pageType==="detail"; 
    const selfTextHtmlExists = selftext_html !=null;
    const urlIsImage = checkUrlIsImage(url);
    const urlContainsPostId = checkUrlContainsPostId(url, id);
    const commentsError = useSelector(selectCommentsError);

    return (
        <div className="post">
            <div className="postVotes">
                <p>{convertNumberToStringThousands(votes)}</p>
            </div>
            <div className="postContext">
                <div className="postContent">
                    <Link to={`/r/${subreddit}`} >
                        <p className='postSubreddit'>{subreddit_name_prefixed}</p>
                    </Link>
                    <Link to={permalink} className="postLink">
                        <h3>{title}</h3>
                    </Link>
                    { isPostDetailView && selfTextHtmlExists && <div className="selftextHtml" dangerouslySetInnerHTML={createMarkup(selftext_html)} />}
                    { urlIsImage && <figure><img src={url} alt={`${subreddit_name_prefixed} - ${title}`} /></figure> }
                    { /* render link only if it's not image or postId isn't in the link (which is just a duplicate of page url) */ }
                    { isPostDetailView && !urlIsImage && !urlContainsPostId && <a className="postedResource" href={url}>{url}</a> }
                </div>
                <div className="postMetaData">
                    <div>
                        <p>By {author}</p>
                    </div>
                    <ReactTimeAgo date={created_utc*1000} locale="en-GB" timeStyle="mini-minute-now"/>
                    <Link to={permalink} className="postLink">
                        <div className="commentNumberContainer">
                            <p>{num_comments}</p>
                            <span className="material-icons-outlined">
                                comment
                            </span>
                        </div>
                    </Link>
                </div>
                {/* start of comments */}
                { isPostDetailView && commentsError && <div className="errorMessage">{`${commentsError.message} comments`}</div> }
                { isPostDetailView && !commentsError && <Comments postId={id}/>}
                {/* end of comments */}
            </div>
        </div>
    )
}