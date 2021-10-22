
const redditAPI = {
    // children kind:t3 refers to a post.
    // children kind:t1 refers to a comment
    async getPostDetail(subreddit, postId){
        // gets the details of a single post, including its comments. 
        const url =`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`;
        try{
            const response = await fetch(url);
            if(response.ok){
                const jsonResponse = await response.json()
                const [postsRes, repliesRes] = jsonResponse; // post detail json returns an array of data containing post detail first and replies second.
                const posts = this.parsePosts(postsRes); // should return an array containing just one post.
                const comments = this.parseComments(repliesRes);
                return {posts: posts, comments: comments};
            }else{
                throw new Error('request has failed!');
            }
        }catch(e){
            console.log(e);
        }
    },
    parseComments(r){
        const comments = r.data.children.map(comment => {
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

    async getPosts(subreddit){
        //const subreddit = 'webdev'
        const listing="top"; //controversial, best, hot, new, random, rising, top
        const limit = 10; 
        const timeframe = 'month'; //hour, day, week, month, year, all
        const url =`https://www.reddit.com/r/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}`
        try{
            const response = await fetch(url);
            if(response.ok){
                const jsonResponse = await response.json()
                return this.parsePosts(jsonResponse); 
            }else{
                throw new Error('request has failed!');
            }
        }catch(e){
            console.log(e);
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
            }
            return data;
        })
        return posts;
    }
}

export default redditAPI; 