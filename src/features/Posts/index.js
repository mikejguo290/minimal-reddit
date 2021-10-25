import React from 'react';
import { Post } from '../../components/Post'

export function Posts (props){
    
    const { pageType, posts } = props;
    
    return (
        <div className="posts">
            <ul className="postsList">
                {posts.map(post => <li key={post.id}><Post data={post} pageType={pageType}/></li>)}
            </ul>
        </div>
    );
}