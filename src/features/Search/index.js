import redditImage from '../../images/reddit.jpeg' /* local imports */
export function Search (){
    return (
        <header>
            <div class="brand">
            <figure class="logo">
                <img src={redditImage} alt="reddit favicon"/>
            </figure>
            <p class="appName">RedditMinimal</p>
            </div>
            <input class="searchBar" placeholder='Search'/>
        </header>
    )
}