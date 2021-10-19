import { Post } from '../index.js';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom';

it('renders props.data',()=>{
    // arrange
    const data = {
        permalink:'',
        subreddit:'brum',
        subreddit_name_prefixed:'r/brum',
        votes:500,
        title:'What to do in Birmingham?',
        introText:'Anything fun to do at the weekend in Birmingham?',
        author:'Bill',
        postedTime:1583469720,
    }
    // act
    render(<Post data={data}/>);

    const subreddit = screen.getByText('r/brum');
    const heading = screen.getByRole('heading',{name:/What to do in Birmingham?/i});
    const bodyText = screen.getByText('Anything fun to do at the weekend in Birmingham?');
    const author = screen.getByText(/by bill/i);
    const postedTime = screen.getByText(1583469720);

    // assert
    expect(subreddit).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(bodyText).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(postedTime).toBeInTheDocument();
});