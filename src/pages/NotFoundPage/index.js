import React from 'react';
import { PageTemplate } from '../../components/PageTemplate';

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
                        <button>Start again</button>
                    </div>
            </PageTemplate>
        </>
    )
}