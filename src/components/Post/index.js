import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Comments } from '../../features/Comments';
import { selectCommentsError } from '../../features/Comments/commentsSlice';
import { selectIsLoadingStatus } from '../../features/Posts/postsSlice';
import { convertNumberToStringThousands, createMarkup , checkUrlIsImage, checkUrlContainsPostId } from '../../utils/helper';
import ReactTimeAgo from 'react-time-ago';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

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

    const commentsError = useSelector(selectCommentsError);
    const loading = useSelector(selectIsLoadingStatus);
    
    /* 
    let page know if a request came in to view detailed Page view. this should be an attribute of a specific Post object.
    to allow for viewing comments in homepage or subreddit, without clicking through to PostDetail page.
    */
    const isPostDetailView= props.pageType==="detail"; 
    const selfTextHtmlExists = selftext_html !=null;
    const urlIsImage = checkUrlIsImage(url);
    const urlContainsPostId = checkUrlContainsPostId(url, id);
    // render link only if it's not image or postId isn't in the link (which is just a duplicate of page url
    const showResourceLink = urlIsImage === false && urlContainsPostId === false;
   
    // JSX elements to be rendered
    const bodyImage = urlIsImage && <figure><img src={url} alt={`${subreddit_name_prefixed} - ${title}`} /></figure>;
    const redditVotes = convertNumberToStringThousands(votes);
    let bodyText;
    let resourceLink;
    let commentsSection;
    if(isPostDetailView){
        // show these fields only if the post shows on a detail page.
        // a lot of data validation goes even AFTER the loading is done. Can't skip these even when using loading state. 
        bodyText = selfTextHtmlExists && <div className="selftextHtml" dangerouslySetInnerHTML={createMarkup(selftext_html)} />
        // render link only if it's not image or postId isn't in the link (which is just a duplicate of page url)
        resourceLink = showResourceLink && <a className="postedResource" href={url}>{url}</a>
        // comments section is either an error message if error loading comments or the Comments component.
        commentsSection = commentsError
            ?<div className="errorMessage">{`${commentsError.message} comments`}</div>
            :<Comments postId={id}/>
    }

    return (
        <div className="post">
            <div className="postVotes">
                <p>{ loading? <Skeleton width={"2em"}/> : redditVotes }</p>
            </div>
            <div className="postContext">
                <div className="postContent">
                    <Link to={`/r/${subreddit || ''}`} >
                        <p className='postSubreddit'>{ subreddit_name_prefixed || <Skeleton width={"4em"}/> }</p>
                    </Link>
                    <Link to={permalink || ''} className="postLink">
                        <h3>{ title || <Skeleton height={"1.17em"} width={"70%"}/> }</h3>
                    </Link>
                    { loading? <Skeleton/> : bodyText } 
                    { loading? <Skeleton/> : bodyImage }
                    { /* render link only if it's not image or postId isn't in the link (which is just a duplicate of page url) */ }
                    { loading? <Skeleton/> : resourceLink }
                </div>
                <div className="postMetaData">
                    <div>
                        <p>{loading? <Skeleton width={"6em"} /> : `By ${author}` }</p>
                    </div>
                    {loading? <Skeleton width={"2em"} /> :<ReactTimeAgo date={created_utc*1000} locale="en-GB" timeStyle="mini-minute-now"/>}
                    {loading && <Skeleton width={'4em'} />}
                    <Link to={permalink || ''} className="postLink" style={{display:loading? 'none': 'undefined'}}>
                        <div className="commentNumberContainer">
                            <span className="material-icons-outlined">
                                comment
                            </span>
                            
                            <p>{num_comments}</p>
                        </div>
                    </Link>
                </div>
                {/* start of comments */}
                { commentsSection }
                {/* end of comments */}
            </div>
        </div>
    )
}