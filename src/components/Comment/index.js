import React from 'react';

export function Comment(props){
    const {author, body, created_utc} = props.data;
    return (
        <article className="comment">
            <div className="commentData">
                <h4 className="commenter">{author}</h4>
                <p className="commentText">{body}</p>
            </div>
            <div>
                <p>{created_utc}</p>
            </div>
        </article>
    )
}