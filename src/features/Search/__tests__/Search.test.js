
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '../index';

test('renders with no input', ()=>{
    render( <Search/>);
    screen.debug();
});