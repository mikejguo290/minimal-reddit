
const redditAPI = {
    async getPostDetail(){
        // gets the details of a single post, including its comments. 
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
                return this.parseResults(jsonResponse); 
            }else{
                throw new Error('request has failed!');
            }
        }catch(e){
            console.log(e);
        }
    },
    parseResults(r){
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
                postedTime:created_utc,
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