import React from 'react';
import { Post } from '../../components/Post';
import { useSelector } from 'react-redux';
import { selectPosts, selectIsLoadingStatus } from './postsSlice';
import { SkeletonPostsList } from '../../skeletons/SkeletonPostsList';

export function Posts (props){
    
    const { pageType, postIds } = props;
    const allPosts = useSelector(selectPosts);
    const loading = useSelector(selectIsLoadingStatus);
    // filter posts by the criteria that postIds array includes post.id 
    const filteredPosts = allPosts.filter(post => postIds.includes(post.id));

    // sort posts with their ids, in order of their id's position in postIds array. //
    
    let idsIndex={} // first create the dictionary to optimise the array.sort compare function.
    for (const [index, postId] of postIds.entries()){ 
        idsIndex[postId]=index;
    }
    const posts = [...filteredPosts]; //array.sort() sorts in-place which React won't allow, because sorting result of useSelector would change the store. 
    //pseudocode: const sortedPosts = allPosts.sort((a,b)=> #index of a.id in orderList - #index of b.id in orderList );
    posts.sort((a,b)=> idsIndex[a.id] - idsIndex[b.id]); 

    /* alternative implementation of sort
    const posts = postIds.map(postId => filteredPost.find(post => post.id===postId)); */

    return (
        <div className="posts">
            {
                loading
                ?   <ul className="postsList">
                        <SkeletonPostsList pageType={pageType} />
                    </ul>
                :<>
                    <ul className="postsList">
                        {posts.map(post => <li key={post.id}><Post data={post} pageType={pageType}/></li>)}
                    </ul>
                </>
            }
        </div>
    );
}