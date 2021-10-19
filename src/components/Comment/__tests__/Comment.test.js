import { Comment } from '../index.js';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom';

it('renders',()=>{
    const data={
        id:50,
        parent_id:1,
        author:"jack",
        author_fullname:"t2_6grk9qb",
        body:"always be skipping",
        created_at:1583469720,
        ups:100,
    }

    render(<Comment data={data}/>);
});

it('renders comment author',()=>{
    // arrange
    const data={
        id:50,
        parent_id:1,
        author:"jack",
        author_fullname:"t2_6grk9qb",
        body:"always be skipping",
        created_at:1583469720,
        ups:100,
    }
    // act
    render(<Comment data={data}/>);
    const authorName = screen.getByText(/jack/i);
    // assert 
    expect(authorName).toBeInTheDocument();
});

it('renders comment body',()=>{
    // arrange
    const data={
        id:50,
        parent_id:1,
        author:"jack",
        author_fullname:"t2_6grk9qb",
        body:"always be skipping",
        created_at:1583469720,
        ups:100,
    }
    // act
    render(<Comment data={data}/>);
    const body = screen.getByText(/always be skipping/i);
    // assert 
    expect(body).toBeInTheDocument();
});

it('renders comment creation time',()=>{
    // arrange
    const data={
        id:50,
        parent_id:1,
        author:"jack",
        author_fullname:"t2_6grk9qb",
        body:"always be skipping",
        created_at:1583469720,
        ups:100,
    }
    // act
    render(<Comment data={data}/>);
    const creationTime = screen.getByText(/1583469720/i);
    // assert 
    expect(creationTime).toBeInTheDocument();
});