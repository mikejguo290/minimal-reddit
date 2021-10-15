import React from 'react';
import { Page } from '../../components/Page';

export function Homepage(){
    const pageType = "home"
    const params = {subreddit:null, postId:null}
    return (
        <Page type={pageType} params={params} />
    );
}

