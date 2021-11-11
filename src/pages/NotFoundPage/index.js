import React, { useEffect } from 'react';
import { PageTemplate } from '../../components/PageTemplate';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux'
import { resetError } from '../../features/Posts/postsSlice';
export const NotFoundPage = () => {
    /* 
    this page handle urls that doesn't map to anything set out in Router on App.js
    react router history also redirect users to this page when they encounter posts loading errors. 
    it resets loading error states in store. 
    (this page uses PageTempate directly, rather than use Page.)
    */
    const dispatch = useDispatch();
    const location = useLocation();
    
    // test location for state passed in by the redirect used in history.push()
    let errorMessage;
    if(location.state !== undefined && location.state.error){ // if location has state && location.state has error
        errorMessage = location.state.error.message;
    }else{
        errorMessage = 'Something has gone wrong'; // error message default value.
    }
    // clear all loading errors
    useEffect(()=>{
        dispatch(resetError());
    },[dispatch])

    return (
        <>
            <PageTemplate>
                    <div className="notFound">  
                        <h3>{errorMessage}</h3>
                        <Link to="/">
                            <button>Back to homepage</button>
                        </Link>
                    </div>
            </PageTemplate>
        </>
    )
}