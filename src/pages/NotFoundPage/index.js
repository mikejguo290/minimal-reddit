import React from 'react';
import { PageTemplate } from '../../components/PageTemplate';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    /* 
    page to handle urls that doesn't map to anything set out in Router on App.js 
    uses PageTempate directly, rather than use Page.
    */
    const errorMessage = 'Something has gone wrong'; // error message with default value.
    
    return (
        <>
            <PageTemplate>
                    <div className="notFound">  
                        <h3>{errorMessage}</h3>
                        <Link to="/">
                            <button>Start again</button>
                        </Link>
                    </div>
            </PageTemplate>
        </>
    )
}