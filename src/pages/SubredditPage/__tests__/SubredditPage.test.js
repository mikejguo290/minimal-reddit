import { SubredditPage } from '../index';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom';

it('renders', ()=>{
    render(<SubredditPage />);
    //screen.debug();
});

it('renders with the banner component',()=>{
    // arrange
    render(<SubredditPage />);
    // act
    const bannerH2Headings = screen.queryAllByRole('heading',{level:2});
    // expect 
    // there should be just two h2 headings, one is used in the aside subreddits. the other one is used in the banner.
    expect(bannerH2Headings.length).toBe(2);
});