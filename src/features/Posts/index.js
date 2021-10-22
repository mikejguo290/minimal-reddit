import React from 'react';
import { Post } from '../../components/Post'
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice';

export function Posts (props){
    
    const posts = useSelector(selectPosts);
   
    return (
        <div className="posts">
            <ul className="postsList">
            {posts.map(post => <li key={post.id}><Post data={post} pageType={props.pageType}/></li>)}
            </ul>
        </div>
    );
}