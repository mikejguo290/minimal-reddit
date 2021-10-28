import React from 'react';
import { convertNumberToStringThousands, createMarkup } from '../../utils/helper';

export function Comment(props){
    const {author, body_html, created_utc} = props.data;
    const bodyHtmlExists = body_html !=null;
    return (
        <article className="comment">
            <div className="commentData">
                <h4 className="commenter">{author}</h4>
                <p>{created_utc}</p>
            </div>
            <div>
                { bodyHtmlExists && <div className="commentBodyHtml" dangerouslySetInnerHTML={createMarkup(body_html)} />}
            </div>
        </article>
    )
}