import { SubredditPage } from '../index';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Route } from 'react-router-dom';

it('renders', ()=>{
    render(
        <Route path="/r/:subreddit">
            <SubredditPage />
        </Route>,
        {
            route:'/r/brum',
        }
    );
    //screen.debug();
});

it('renders with the banner component',()=>{
    // arrange
    render(
        <Route path="/r/:subreddit">
            <SubredditPage />
        </Route>,
        {
            route:'/r/brum',
        }
    );

    // act
    const bannerH2Heading = screen.getByRole('heading',{level:2, name:/brum/i});
    // expect 
    // there should be just two h2 headings, one is used in the aside subreddits. the other one is used in the banner.
    expect(bannerH2Heading).toBeInTheDocument();
});

// additional tests to render it with x number of posts and subreddits.