import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import { Search } from '../index';

test('renders input with no problem', ()=>{
    render(<Search/>);
    screen.debug();
});