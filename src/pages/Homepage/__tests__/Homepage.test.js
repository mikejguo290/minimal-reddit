import { Homepage } from '../index';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom';

it('renders', ()=>{
    render(<Homepage />);
    //screen.debug();
});

it('renders without the banner component',()=>{
    // arrange
    render(<Homepage />);
    // act
    const bannerH2Headings = screen.queryAllByRole('heading',{level:2});
    // expect 
    // there should be just one h2 headings, which is used in the aside subreddits. the other one is used in the banner.
    expect(bannerH2Headings.length).toBe(1);
});