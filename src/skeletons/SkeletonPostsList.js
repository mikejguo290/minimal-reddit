import React from 'react';
import { Post } from '../components/Post';

export function SkeletonPostsList({pageType}){
    // used to output list of Posts (each post already set up with React-loading-skeleton when posts are loading.
    // construct JSX conditional on pageType. 
    // if pageType is detail, output just one Post component, else output five.
    let postsList;
    if(pageType==="detail"){
        postsList = <li key="1"><Post data={{}} pageType={pageType}/></li>
    }else{
        postsList = [1,2,3,4,5].map(i => <li key={i}><Post data={{}} pageType={pageType}/></li> )    
    }
    return postsList;
}
