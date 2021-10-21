import { PostDetailsPage } from '../index';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom'
import { Route } from 'react-router-dom';

/* 
// code did not work.
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    userParams:()=> ({
        subreddit:'reactjs',
        postId:1,
    }),
    useRouteMatch:()=>({url:'/r/reactjs/comments/1/'}),
}));
*/

// will have to mock redux to supply this with the right set of data in Posts. particularly the assertion about post by class per PostDetailsPage

it('renders', ()=>{
    render(
        <Route path="/r/:subreddit/comments/:postId">
            <PostDetailsPage/>
        </Route>, 
        {
            route: '/r/webdev/comments/3'
        });
    //screen.debug();
});


it('renders without the banner component',()=>{
    // arrange
    render(
        <Route path="/r/:subreddit/comments/:postId">
            <PostDetailsPage/>
        </Route>, 
        {
            route: '/r/webdev/comments/3'
        });
    // act
    const h2Heading = screen.queryByRole('heading',{level:2, name:/webdev/i});
    // expect 
    // there should be just two h2 headings, one is used in the aside subreddits. the other one is used in the banner.
    expect(h2Heading).not.toBeInTheDocument();
});

it('renders with just one Post',()=>{
    const { container } =  render(
        <Route path="/r/:subreddit/comments/:postId">
            <PostDetailsPage/>
        </Route>, 
        {
            route: '/r/webdev/comments/3'
        });
    // getting the number of elements with class 'post' by using the DOM node 
    expect(container.getElementsByClassName('post').length).toBe(1);
});

