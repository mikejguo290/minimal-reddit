import { Banner } from '../index';
import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';

it('renders', ()=>{
    render(<Banner />);
});

it('renders h2 text from props', ()=>{
    // arrange
    const headingText="disney$"
    render(<Banner name={headingText} />);
    // act
    const heading = screen.getByText('disney$');
    // assert
    expect(heading).toBeInTheDocument();
});