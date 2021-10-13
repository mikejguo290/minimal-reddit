
import { Comments } from '../../features/Comments';
export function Post(){
    return (
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
    )
}