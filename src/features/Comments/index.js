import React from 'react';
import { Comment } from '../../components/Comment';
import { useSelector } from 'react-redux';
import { selectComments } from './commentsSlice';

export function Comments(props){
    /* comments will have to make a call to fetch reddit comments associated with one particular post. */
    // expect subreddit, postId, author, comment text, posted time
    const AllComments = useSelector(selectComments);
    const comments = AllComments[props.postId];
    
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