import { Search } from '../index';
import React from 'react';
import { render, screen  } from '../../../utils/test-utils';
import '@testing-library/jest-dom' /* import jest-dom to access the Dom-specific matcher methods. */

test('renders', ()=>{
    render(<Search/>);
});

test('renders with app name', ()=>{
    render(<Search/>);
    const appName = screen.getByText('RedditMinimal');
    expect(appName).toBeInTheDocument();
});

test('renders with input', ()=>{
    render(<Search/>);
    const inputField = screen.getByPlaceholderText(/search/i);
    expect(inputField).toBeInTheDocument();
});