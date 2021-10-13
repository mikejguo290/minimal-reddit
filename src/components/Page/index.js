import redditImage from '../../images/reddit.jpeg' /* local imports */
import { Subreddits } from '../../features/Subreddits';
import { Comments } from '../../features/Comments';
export function Page () {
    return (
        <>
            <main>        
                <div className="feed">
                    <div className="posts">
                        {/* start of post */}
                        <div className="post">
                        <div className="postVotes">
                            <p>2k</p>
                        </div>
                        <div className="postContext">
                            <p className="subRedditLink">r/subreddit_name</p>
                            <h3>Enter the Pics Halloween photo!</h3>
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
                            {/* start of comments */}
                            <Comments />
                            {/* end of comments */}

                        </div>
                        </div>
                        {/* end of post */}
                    </div>

                </div>
            </main>
            <aside>
                <Subreddits />
            </aside>
        </>
    )
}
