import redditImage from '../../images/reddit.jpeg' /* local imports */
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
            <div class="brand">
            <figure class="logo">
                <img src={redditImage} alt="reddit favicon"/>
            </figure>
            <p class="appName">RedditMinimal</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input class="searchBar" placeholder='Search' value={searchTerm} onChange={handleChange} />
            </form>
        </header>
    )
}