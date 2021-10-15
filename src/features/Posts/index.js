import { Post } from '../../components/Post'
export function Posts (props){
    const post1 = {
        votes: 2000,
        subreddit:'r/javascript',
        title:'more frameworks required',
        introText:'The world cries out for more javascript frameworks during frameworks shortage.',
        author:'k.dodds',
        postedTime:'6 hours ago',
        comments:[],
    };

    const post2 = {
        votes: 3000,
        subreddit:'r/javascript',
        title:'Is PHP better?',
        introText:'Should I learn PHP instead of Javascript?',
        author:'d.abramov',
        postedTime:'3 hours ago',
        comments:[],
    };

    const post3 = {
        votes: 3000,
        subreddit:'r/javascript',
        title:'JQuery use finally peaked in 2021 ',
        introText:'JQuery decline has begun. We owe JQuery a huge debt',
        author:'m.appleton',
        postedTime:'1 hours ago',
        comments:[],
    };
    
    const posts = [post1, post2, post3 ];
    return (
        <div className="posts">
            {posts.map(post => <Post data={post} pageType={props.pageType}/>)}
        </div>
    );
}