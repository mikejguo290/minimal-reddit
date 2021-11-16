import React from 'react';
import redditImage from '../../images/reddit.jpeg'; /* local imports */
import { Link } from 'react-router-dom';
import { clearSearchTerm, setSearchTerm , selectSearch} from './searchSlice';
import { useDispatch, useSelector } from 'react-redux'

export function Search (){
    //const [ searchTerm, setSearchTerm ]=useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearch);

    const handleChange = (event) => {
        const userInput = event.target.value;
        dispatch(setSearchTerm(userInput));
    }
    const handleClick = (event) =>{ // clear search button
        dispatch(clearSearchTerm());
    }
    const handleSubmit = (event) => {
        // ***** form submission is disabled! *****
        event.preventDefault();
    }
    
    /* 
    // extra feature. implement submit searchTerm to filter and display list of results
    // rendered in a dedicated search results page. 
    // in reddit app. typing search brings up list of matching subreddits
    // submitting search result tells reddit app to search for posts. communities, subreddits etc. 
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
            <form onSubmit={handleSubmit} >
                <input className="searchBar" type='text' placeholder='Search' value={searchTerm} onChange={handleChange} />
                {
                searchTerm
                    ?<button className="clearSearch" onClick={handleClick}>X</button>
                    :<></>
                }
            </form>
        </header>
    )
}