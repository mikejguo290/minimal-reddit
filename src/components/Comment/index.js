import React from 'react';
import { useSelector } from 'react-redux';
import { selectCommentsIsLoading } from '../../features/Comments/commentsSlice';
import { createMarkup } from '../../utils/helper';
import ReactTimeAgo from 'react-time-ago';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export function Comment(props){
    const {author, body_html, created_utc, score } = props.data;
    const loading = useSelector(selectCommentsIsLoading);
    const bodyHtmlExists = body_html !=null;
    const bodyText = bodyHtmlExists && <div className="commentBodyHtml" dangerouslySetInnerHTML={createMarkup(body_html)} />

    return (
        <SkeletonTheme baseColor="#b5b3b3" highlightColor="#ebebeb">
            <article className="comment">
                <div className="commentData">
                    <h4 className="commenter">{loading? <Skeleton width={'6em'}/> : author}</h4>
                    {loading? <Skeleton width={'2em'}/> : <ReactTimeAgo date={created_utc*1000} locale="en-GB" timeStyle="mini-minute-now"/>}
                </div>
                <div>
                    {loading? <Skeleton count={3} /> : bodyText }
                    <p className="commentKarma">{ loading? <Skeleton width={'4em'}/>:`${score} Karma` }</p>
                </div>
            </article>
        </SkeletonTheme>
    )
}