import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom' ;

export function SubredditPage(){
    const pageType = "subreddit"
    const { subreddit } = useParams();
    const params = {subreddit: subreddit, postId:null};
    return (
        <Page type={pageType} params={params}/>
    );
}
