
const redditAPI = {
    // children kind:t3 refers to a post.
    // children kind:t1 refers to a comment
    async getPostDetail({subreddit, id}){
        // gets the details of a single post, including its comments. 
        const url =`https://www.reddit.com/r/${subreddit}/commnets/${id}.json`;
        try{
            const response = await fetch(url);
            if(response.ok){
                const jsonResponse = await response.json()
                const [postsRes, repliesRes] = jsonResponse;
                const posts = this.parsePosts(postsRes); // should return an array containing just one post.
                return posts;
            }else{
                throw new Error('request has failed!');
            }
        }catch(e){
            console.log(e);
        }
    },
    parseReplies(r){
        const comments = r.data.children
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