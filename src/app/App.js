import { Page } from '../pages/Page';

import redditImage from '../images/reddit.jpeg' /* local imports */

function App() {
  return (
    <>
      <header>
        <div class="brand">
          <figure class="logo">
            <img src={redditImage} alt="reddit favicon"/>
          </figure>
          <p class="appName">Reddit Minimal</p>
        </div>
        <input class="searchBar" placeholder='Search'/>
        <div class="empty">
        </div>
      </header>

      <main>

        
      </main>
    </>
  );
}

export default App;
