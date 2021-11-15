import React, { useEffect } from 'react';
import { PageTemplate } from '../../components/PageTemplate';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch, useSelector  } from 'react-redux'
import { selectPostsError, resetError as resetPostsError } from '../../features/Posts/postsSlice';
import { selectCommentsError, resetError as resetCommentsError } from '../../features/Comments/commentsSlice';
export const NotFoundPage = () => {
    /* 
    this page handle urls that doesn't map to anything set out in Router on App.js
    react router history also redirect users to this page when they encounter posts loading errors. 
    it resets loading error states in store. 
    (this page uses PageTempate directly, rather than use Page.)
    */
    const postsError = useSelector(selectPostsError);
    const commentsError = useSelector(selectCommentsError);
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
        if(postsError){
            dispatch(resetPostsError());
        }
        if(commentsError){
            dispatch(resetCommentsError());
        }
    },[dispatch,postsError, commentsError ]);

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