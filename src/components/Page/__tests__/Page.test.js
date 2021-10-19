import { Page } from '../index';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom'

it('renders',()=>{
    const type = 'subreddit'
    const params = {subreddit:'togaParty', postId:1}
    render(<Page type={type} params={params}/>); 
    //screen.debug();
});

it('renders banner with subreddit name',()=>{
    // arrange
    const type = 'subreddit'
    const params = {subreddit:'togaParty', postId:1}
    render(<Page type={type} params={params}/>);
    // act
    const bannerHeading = screen.getByRole('heading' ,{name:'togaParty'});
    // assert
    expect(bannerHeading).toBeInTheDocument();
});

 // the container or the result of getBy are DOM nodes. which can be accessed by react testing library
 const { container } = 

 it('renders with feed container',()=>{
    // this tests implementation detail - classname, rather than something the user can experience !
    // arrange
    const type = 'subreddit'
    const params = {subreddit:'togaParty', postId:1}
    // the container or the result of getBy are DOM nodes. which can be accessed by react testing library
    // act
    const { container } = render(<Page type={type} params={params}/>);

    // assert
    expect(container.getElementsByClassName('feed').length).toBe(1);
});


it('renders subreddits section',()=>{
    // arrange
    const type = 'subreddit'
    const params = {subreddit:'togaParty', postId:1}
    render(<Page type={type} params={params}/>);
    // act
    const subredditsHeading = screen.getByRole('heading' ,{name:/subreddits/i});
    // assert
    expect(subredditsHeading).toBeInTheDocument();
});
