import React from 'react';
import { Comment } from '../../components/Comment';
export function Comments(){
    /* comments will have to make a call to fetch reddit comments associated with one particular post. */
    const comments = [
        {},{},{}
    ];
    return (
        <div className="comments">
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}