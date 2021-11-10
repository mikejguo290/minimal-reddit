import React from 'react';
import { Comment } from '../components/Comment';

export function SkeletonCommentsList() {
    // displays a list of three Comment components with blank data
    // this would allow <Skeleton/> components to replace fields on Comment.
    return (
        <>
            <li key={1}><Comment data={{}}/></li>
            <li key={2}><Comment data={{}}/></li>
            <li key={3}><Comment data={{}}/></li>
        </>
    );
}