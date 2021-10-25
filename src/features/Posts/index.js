import React from 'react';
import { Post } from '../../components/Post';
import { useSelector } from 'react-redux';
import { selectSearch } from '../Search/searchSlice';

export function Posts (props){
    
    const { pageType, posts } = props;
    const search = useSelector(selectSearch);
    console.log(search);
    return (
        <div className="posts">
            <ul className="postsList">
                {posts.filter(post => {
                    if(search){
                        return post.title.toLowerCase().includes(search)
                    }else{
                        return post;
                    }
                })
                .map(post => <li key={post.id}><Post data={post} pageType={pageType}/></li>)}
            </ul>
        </div>
    );
}