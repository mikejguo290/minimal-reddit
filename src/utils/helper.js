export function convertNumberToStringThousands(num){
    if(typeof num==='number'){
        if(num>1000){
            const roundedNum = (num/1000).toFixed(1) // rounds number to two decimals and returns a str.
            return `${roundedNum}k`;
        }else{
            return `${num}`
        }
    }
    else{
        return null;
    }
}

// helper function to unescape html strings with &lt; for tags.
export function htmlDecode(input){
    var doc = new DOMParser().parseFromString(input,'text/html');
    return doc.documentElement.textContent;
}

// helper function to return object with __html property to set innerHTML in react. 
export function createMarkup(htmlInput){
    return {
        __html: htmlDecode(htmlInput),
    }
}

export function checkUrlIsImage(url){
    // checks url's file extension and returns true if extension matches list of image file extensions.
    // return null if url does not exist
    if(url){
        return url.match(/\.(jpeg|jpg|png|gif|tiff|psd|pdf|eps|ai|indd|raw)$/)!=null;
    }else{
        return null;
    }
}

export function checkUrlContainsPostId(url, postId){
    // checks url for inclusion of postId, if so Link is not worth rendering!
    // return null if url or postId does not exist
    return (url && postId)? url.includes(postId) : null;
}

export function mixPosts(posts){
    // mix up post ids from each subreddits predictably.
    // a:[1,2], b:[3,4] => mixed [1,3,2,4]
    // input = list of post objects
    // output = mixed list of postIds

  	// javascript to create an array from the property values of objects in a list. 
  	let subreddits=[];
  	for (let post of posts){
        if(subreddits.includes(post.subreddit)){
        }else{
            subreddits.push(post.subreddit)
        }
    }
    const aggPostIds = subreddits.map(subreddit => {
        return {[subreddit]: posts.filter(post => post.subreddit === subreddit).map(post => post.id)}
    });
    
    // expect list like [{'webdev':[1,2]}, {'reactjs':[3,4]},{'funny':[5]}];
    let postIdsMixed = [];
    const limit = 10 // limit = 10 posts fetched per API call.

    for (let i=0; i<limit; i++){
        for (let j=0; j<subreddits.length; j++){ //iterate through each subreddit in list.
            const subreddit = subreddits[j];
            try{
                if(aggPostIds[j][subreddit][i]){ 
                //access list item first, then with object, use property key - subreddit name, to accesss list of post ids.
                postIdsMixed.push(aggPostIds[j][subreddit][i]);
                }
            }catch(e){
            /* skip if posts[j][subreddit][i] doesn't exist. */ 
            }
        }
    }
    return postIdsMixed;
}