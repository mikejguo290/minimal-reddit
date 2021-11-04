import React from 'react';
import { Post } from '../../components/Post';

import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, clearSearchTerm } from '../Search/searchSlice';
import { selectPosts } from './postsSlice';

export function Posts (props){
    
    const { pageType, postIds } = props;
    const allPosts = useSelector(selectPosts);
    
    // filter posts by the criteria that postIds array includes post.id 
    const filteredPosts = allPosts.filter(post => postIds.includes(post.id));
    const filteredPostsIsEmpty = filteredPosts.length===0;

    let idsIndex={} // first create the dictionary to try and optimise the array.sort compare function.
    for (const [index, postId] of postIds.entries()){ 
        idsIndex[postId]=index;
    }
    const posts = [...filteredPosts]; //array.sort() sorts in-place which React won't allow, because sorting result of useSelector would change the store. 
    //pseudocode: const sortedPosts = allPosts.sort((a,b)=> #index of a.id in orderList - #index of b.id in orderList );
    posts.sort((a,b)=> idsIndex[a.id] - idsIndex[b.id]); 

     /*
    // alternative implementation of sort
    const posts = postIds.map(postId=>{
        return filteredPost.find(post => post.id===postId);
    });
    */

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