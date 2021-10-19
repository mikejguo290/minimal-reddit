import { Subreddit } from '../index.js';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom';

it('renders',()=>{
    const subredditName = "Askreddit";
    const data = {name : subredditName}
    render(<Subreddit data={data}/>);
});

it('renders the name passed in via props.data',()=>{
    // arrange
    const subredditName = "Askreddit";
    const data = {name : subredditName}
    render(<Subreddit data={data}/>);
    // act
    const heading = screen.getByText(subredditName);
    // assert
    expect(heading).toBeInTheDocument();
});