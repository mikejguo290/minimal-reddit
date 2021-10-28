import React from 'react';

export function Comment(props){
    const {author, body, created_utc} = props.data;
    return (
        <article className="comment">
            <div className="commentData">
                <h4 className="commenter">{author}</h4>
                <p>{created_utc}</p>
            </div>
            <div>
                <p className="commentText">{body}</p>
            </div>
        </article>
    )
}