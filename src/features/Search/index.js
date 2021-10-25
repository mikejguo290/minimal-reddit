import React from 'react';
import redditImage from '../../images/reddit.jpeg'; /* local imports */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { setSearchTerm , selectSearch} from './searchSlice';
import { useDispatch, useSelector } from 'react-redux'

export function Search (){
    //const [ searchTerm, setSearchTerm ]=useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearch);

    const handleChange = (event) =>{
        const userInput = event.target.value;
        dispatch(setSearchTerm(userInput));
    }

    /* 

    // extra feature. implement submit searchTerm to filter and display something else. 
    // in reddit app. typing search brings up list of matching subreddits
    // submitting search result tells reddit app to search for posts. communities, subreddits etc. 
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(searchTerm){
            console.log(searchTerm);
            dispatch(submitSearchTerm(searchTerm));
        }
        setSearchTerm('');
    }
    */

    return (
        <header>
            <div className="brand">
            <Link to='/' className="appNameLink">
                <figure className="logo">
                    <img src={redditImage} alt="reddit favicon"/>
                </figure>
            </Link>
            <Link to='/' className="appNameLink">
                <p className="appName">RedditMinimal</p>
            </Link>
            </div>
            <form >
                <input className="searchBar" placeholder='Search' value={searchTerm} onChange={handleChange} />
            </form>
        </header>
    )
}