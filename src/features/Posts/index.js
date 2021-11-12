import React from 'react';
import { Post } from '../../components/Post';
import { useSelector } from 'react-redux';
import { selectPosts, selectIsLoadingStatus } from './postsSlice';
import { SkeletonPostsList } from '../../skeletons/SkeletonPostsList';

export function Posts (props){
    /* Posts takes props passed in by Page and uses props.postIds to sort list of posts 
    from the store. before mapping the sorted list into an array of Post components.
    if the status of fetch posts API call is loading. render a loading skeleton of Posts. 
    */
    const { pageType, postIds } = props;
    let posts = useSelector(selectPosts);
    const loading = useSelector(selectIsLoadingStatus);

    // sort posts with their ids, in order of their id's position in postIds array.
    
    // first create the dictionary to optimise the array.sort compare function.
    let idsIndex={} 
    for (const [index, postId] of postIds.entries()){ 
        idsIndex[postId]=index;
    }
    
    // filter posts by the criteria that postIds array includes post.id 
    posts = posts.filter(post => postIds.includes(post.id));
    //pseudocode: const sortedPosts = posts.sort((a,b)=> #index of a.id in orderList - #index of b.id in orderList );
    posts.sort((a,b)=> idsIndex[a.id] - idsIndex[b.id]); 

    /* alternative implementation of sort (without the dictionary setup)
    posts = postIds.map(postId => filteredPost.find(post => post.id===postId)); */

    return (
        <div className="posts">
            {
                loading
                ?   <ul className="postsList">
                        <SkeletonPostsList pageType={pageType} />
                    </ul>
                :
                    <ul className="postsList">
                        {posts.map(post => <li key={post.id}><Post data={post} pageType={pageType}/></li>)}
                    </ul>
            }
        </div>
    );
}