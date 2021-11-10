import React from 'react';
import { Comment } from '../../components/Comment';
import { useSelector } from 'react-redux';
import { selectComments, selectCommentsIsLoading } from './commentsSlice';

export function Comments(props){
    /* comments will have to make a call to fetch reddit comments associated with one particular post. */
    // expect subreddit, postId, author, comment text, posted time
    const AllComments = useSelector(selectComments);
    const loading = useSelector(selectCommentsIsLoading);
    const comments = AllComments[props.postId]? AllComments[props.postId]:[]; 
    // comments is initiall undefined which cannot be mapped. 
    // if commentsSlice's initial value was [], it would have been fine without the above line of code.
    // comments.map() with empty array would have mapped no Comment components.  
      
    return (
        <div className="comments">
            <ul className="commentsList">
                { 
                    loading
                    ? <>
                        {/* extract this into a SkeletonCommentsList */}
                        <li key={1}><Comment data={{}}/></li>
                        <li key={2}><Comment data={{}}/></li>
                        <li key={3}><Comment data={{}}/></li>
                    </>
                    : comments.map(comment => {
                        return <li key={comment.id}><Comment data={comment}/></li>
                    })
                }
            </ul>
        </div>
    )
}