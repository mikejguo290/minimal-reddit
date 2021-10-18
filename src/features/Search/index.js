import React from 'react'
import redditImage from '../../images/reddit.jpeg' /* local imports */
import { Link } from 'react-router-dom';
import { useState } from 'react';
export function Search (){
    const [ searchTerm, setSearchTerm ]=useState('');

    const handleChange = (event) =>{
        const userInput = event.target.value;
        setSearchTerm(userInput);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(searchTerm){
            console.log(searchTerm);
        }
        setSearchTerm('');
    }

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
            <form onSubmit={handleSubmit}>
                <input className="searchBar" placeholder='Search' value={searchTerm} onChange={handleChange} />
            </form>
        </header>
    )
}