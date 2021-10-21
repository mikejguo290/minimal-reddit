import React from 'react';
import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
//import {createMemoryHistory} from 'history';

const AllTheProviders = ({children})=>{

    return (
        <Router>
            {children}
        </Router>
    )
}

const customRender = (ui, {route='/'}={}) => {
    window.history.pushState({},'home page', route);
    return render(ui, {wrapper: AllTheProviders})
}



// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}