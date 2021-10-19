import React from 'react';
import { Comment } from '../../components/Comment';
export function Comments(){
    /* comments will have to make a call to fetch reddit comments associated with one particular post. */
    // expect subreddit, postId, author, comment text, posted time
    const comments = [
        {
            id:50,
            parent_id:1,
            author:"mike",
            author_fullname:"t2_6grk9qb",
            body:"this is amazing",
            created_at:1583469720,
            ups:100,

        },{
            id:51,
            parent_id:1,
            author:"mike",
            author_fullname:"t2_6grk9qb",
            body:"this is concerning",
            created_at:1583469720,
            ups:100,
        },{
            id:52,
            parent_id:1,
            author:"mike",
            author_fullname:"t2_6grk9qb",
            body:"this is something else",
            created_at:1583469720,
            ups:100,
        }
    ];
    return (
        <div className="comments">
            <ul className="commentsList">
                {comments.map(comment => {
                    return <li key={comment.id}><Comment data={comment}/></li>
                })}
            </ul>
        </div>
    )
}