import React from 'react';
import { createMarkup } from '../../utils/helper';
import ReactTimeAgo from 'react-time-ago';

export function Comment(props){
    const {author, body_html, created_utc} = props.data;
    const bodyHtmlExists = body_html !=null;
    return (
        <article className="comment">
            <div className="commentData">
                <h4 className="commenter">{author}</h4>
                <ReactTimeAgo date={created_utc*1000} locale="en-GB" timeStyle="mini-minute-now"/>
            </div>
            <div>
                { bodyHtmlExists && <div className="commentBodyHtml" dangerouslySetInnerHTML={createMarkup(body_html)} />}
            </div>
        </article>
    )
}