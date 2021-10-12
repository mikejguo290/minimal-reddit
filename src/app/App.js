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
          <p class="appName">RedditMinimal</p>
        </div>
        <input class="searchBar" placeholder='Search'/>
        <div class="empty">
        </div>
      </header>

      <main>
        <div className="feed">
          <div className="posts">
            {/* start of post */}
            <div className="post">
              <div className="postVotes">
                <p>2k</p>
              </div>
              <div className="postContext">
                <p>r/subreddit_name</p>
                <h3>Title</h3>
                <p>Image or Intro Text</p>
                <div className="postmetaData">
                  <p>author</p>
                  <p>posted time</p>
                  <p>Comments</p>
                </div>
              </div>
            </div>
            {/* end of post */}

            {/* start of post */}
            <div className="post">
              <div className="postVotes">
                <p>2k</p>
              </div>
              <div className="postContext">
                <p>r/subreddit_name</p>
                <h3>Title</h3>
                <p>Image or Intro Text</p>
                <div className="postmetaData">
                  <p>Author</p>
                  <p>Posted time</p>
                  <p>Comments</p>
                </div>
              </div>
            </div>
            {/* end of post */}

            {/* start of post */}
            <div className="post">
              <div className="postVotes">
                <p>2k</p>
              </div>
              <div className="postContext">
                <p>r/subreddit_name</p>
                <h3>Title</h3>
                <p>Image or Intro Text</p>
                <div className="postmetaData">
                  <p>Author</p>
                  <p>Posted time</p>
                  <p>Comments</p>
                </div>
              </div>
            </div>
            {/* end of post */}

          </div>

        </div>
        <div className="subredditsContainer">
          <div className="subreddits">
            <h2>Subreddits</h2>
            <div className="subreddit">
              <figure>
                <img src={redditImage} alt='subreddit icon' />
              </figure>
              <h3>Javascript</h3>
            </div>

            <div className="subreddit">
              <figure>
                <img src={redditImage} alt='subreddit icon' />
              </figure>
              <h3>React</h3>
            </div>

          </div>
        </div>
        
      </main>
    </>
  );
}

export default App;
