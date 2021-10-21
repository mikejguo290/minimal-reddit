import App from '../App';
import { Homepage } from '../../pages/Homepage';
import React from 'react';
import { render, screen  } from '../../utils/test-utils';
import '@testing-library/jest-dom';
import { Route } from 'react-router-dom';


it('renders Subreddits heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/subreddits/i);
  expect(headingElement).toBeInTheDocument();
});

it('renders Homepage without the subreddit banner', ()=>{
  // arrange
  // this route should cause App to render with a Homepage
  render(<App />,
      {
        route:'/'
      }
    );
  // act
  const h2Headings = screen.queryAllByRole('heading',{level:2});
  // expect 
  // there should be just one h2 heading in the homepage, which is used in the aside subreddits. the other one is used in the banner.
  expect(h2Headings.length).toBe(1);
});

it('renders Subreddit page with the banner component',()=>{
  // arrange
  render(<App />,
      {
        route: '/r/brum'
      }
    );
  // act
  const h2Heading = screen.getByRole('heading',{level:2, name:/brum/i});
  // expect 
  // there should be just two h2 headings, one is used in the aside subreddits. the other one is used in the banner.
  expect(h2Heading).toBeInTheDocument();
});

it('renders Post page without the banner component',()=>{
  // arrange
  render(<App />,
      {
        route: '/r/brum/comments/21'
      }
    );
  // act
  const h2Heading = screen.queryByRole('heading',{level:2, name:/brum/i});
  // expect 
  // there should be just two h2 headings, one is used in the aside subreddits. the other one is used in the banner.
  expect(h2Heading).not.toBeInTheDocument();
});