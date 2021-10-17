import { Post } from '../../components/Post'
export function Posts (props){
    const post1 = {
        postId: '1',
        subreddit:'reactjs',
        votes: 2000,
        title:'more frameworks required',
        introText:'The world cries out for more javascript frameworks during frameworks shortage.',
        author:'k.dodds',
        postedTime:'6 hours ago',
        comments:[],
    };

    const post2 = {
        postId: '2',
        subreddit:'javascript',
        title:'Is PHP better?',
        votes: 3000,
        introText:'Should I learn PHP instead of Javascript?',
        author:'d.abramov',
        postedTime:'3 hours ago',
        comments:[],
    };

    const post3 = {
        postId: '3',
        subreddit:'webdev',
        votes: 3000,
        title:'JQuery use finally peaked in 2021 ',
        introText:'JQuery decline has begun. We owe JQuery a huge debt',
        author:'m.appleton',
        postedTime:'1 hours ago',
        comments:[],
    };
    
    const posts = [post1, post2, post3 ];
    const { subreddit, postId } = props.params;
    return (
        <div className="posts">
            {posts.filter(post =>{
                if(postId && subreddit){
                    return (post.postId===postId && post.subreddit===subreddit); // if postId exists, then subreddit also exists and must also match. 
                }else if(subreddit){
                    return post.subreddit===subreddit;
                }else{ return post } // all post gets returned at homepage. 
            }).map(post => <Post data={post} pageType={props.pageType}/>)}
        </div>
    );
}