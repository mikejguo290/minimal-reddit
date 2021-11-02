import React from 'react';
import { Post } from '../../components/Post';

import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, clearSearchTerm } from '../Search/searchSlice';

export function Posts (props){
    
    const { pageType, posts } = props;
    const filteredPostsIsEmpty = posts.length===0;

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearch);
    const handleClick = () =>{
        dispatch(clearSearchTerm());
    }
    const emptySearchResult = (
        <div className="emptySearchResult">
            <h3>{`No posts matching "${searchTerm}"`}</h3>
            <button className="resetSearch" onClick={handleClick}>Reset search</button>
        </div>
        );

    return (
        <div className="posts">
            <ul className="postsList">
                {posts.map(post => <li key={post.id}><Post data={post} pageType={pageType}/></li>)}
            </ul>
            { /* loading state has to take into account filteredPosts will be momentarily empty */}
            { filteredPostsIsEmpty && emptySearchResult }
        </div>
    );
}