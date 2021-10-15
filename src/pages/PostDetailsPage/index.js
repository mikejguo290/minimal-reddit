import React from 'react';
import { Page } from '../../components/Page';
import { useParams } from 'react-router-dom';

export function PostDetailsPage(){
    const pageType = "detail";
    const { subreddit, postId } = useParams();
    const params = {subreddit:subreddit, postId:postId};
    return (
        <Page type={pageType} params={params} />
    );
}