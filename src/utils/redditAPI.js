
const redditAPI = {
    // children kind:t3 refers to a post.
    // children kind:t1 refers to a comment

    async getAllPosts(subreddits){
        //const posts = await Promise.all([Promise_1, Promise_2]); where Promise is this.getPosts();
        const posts = await Promise.all(subreddits.map(subreddit => this.getPosts(subreddit)));
        return posts;
    },

    async getPosts(subreddit){
        //const subreddit = 'webdev'
        const listing="top"; //controversial, best, hot, new, random, rising, top
        const limit = 10; 
        const timeframe = 'month'; //hour, day, week, month, year, all
        const url =`https://www.reddit.com/r/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}`
        
        const response = await fetch(url);
        if(response.ok){
            const jsonResponse = await response.json()
            return this.parsePosts(jsonResponse); 
        }else{
            throw new Error('request has failed!');
        }
        
    },
    parsePosts(r){
        const posts = r.data.children.map(post => {
            const { 
                id,
                subreddit,
                selftext,
                selftext_html,
                author,
                author_fullname,
                title, 
                score, 
                subreddit_name_prefixed,
                permalink,
                url,
                created_utc,
                media,
                media_embed,
                media_only,
                num_comments,
                isVideo,
                thumbnail,
                edited,
            } = post.data;

            const data = {
                id:id,
                subreddit:subreddit,
                subreddit_name_prefixed:subreddit_name_prefixed,
                selftext:selftext,
                selftext_html:selftext_html,
                author: author,
                author_fullname:author_fullname,
                title:title,
                votes:score, 
                permalink:permalink,
                url:url,
                created_utc:created_utc,
                media: media,
                media_embed:media_embed,
                media_only:media_only,
                isVideo:isVideo,
                thumbnail:thumbnail,
                edited:edited,
                num_comments:num_comments,
            }
            return data;
        })
        return posts;
    },

    async getPostDetail(subreddit, postId){
        // gets the details of a single post, including its comments. 
        const url =`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`;
       
        const options = {
            method:'GET',
            headers: {
                'Accept':'application/json'
            }
        }

        const response = await fetch(url,options);
        if(response.ok){
            const jsonResponse = await response.json()
            const [postsRes, repliesRes] = jsonResponse; // post detail json returns an array of data containing post detail first and replies second.
            const posts = this.parsePosts(postsRes); // should return an array containing just one post.
            const comments = this.parseComments(repliesRes);
            return {posts: posts, comments: comments};
        }else{
            throw new Error('request has failed!');
        }
    },
    parseComments(r){
        // filter for comment by stipulating data.children[child].kind==="t1"
        // kind==="more" data.children with list of comment ids
        // each comment can be accessed with the attribute 
        // permalink: "/r/learnprogramming/comments/qgx47b/my_teenager_is_learning_python_and_a_few_other/commentId/" where hi99v3j
        const comments = r.data.children.filter(child => child.kind==="t1").map(comment => {
            const {
                subreddit_id,
                subreddit,
                subreddit_name_prefixed,
                replies,
                id,
                author,
                parent_id, // parent comment/post id
                score,
                author_fullname,
                collapsed,
                body,
                body_html,
                permalink,
                created_utc,
                link_id,
                depth,
            } = comment.data;

            const data = {
                subreddit_id,
                subreddit,
                subreddit_name_prefixed,
                replies,
                id,
                author,
                parent_id, // parent comment/post id
                score,
                author_fullname,
                collapsed,
                body,
                body_html,
                permalink,
                created_utc,
                link_id,
                depth,
            }
            return data;
        });
        return comments;
    },
}

export default redditAPI; 