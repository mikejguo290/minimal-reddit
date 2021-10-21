import React from 'react';
import { Post } from '../../components/Post'
export function Posts (props){
    const post1 = {
        postId: '1',
        permalink:'/r/reactjs/comments/1/',
        subreddit:'reactjs',
        subreddit_name_prefixed:'r/reactjs',
        votes: 2000,
        title:'more frameworks required',
        introText:'The world cries out for more javascript frameworks during frameworks shortage.',
        author:'k.dodds',
        postedTime:'6 hours ago',
    };

    const post2 = {
        postId: '2',
        permalink:'/r/javascript/comments/2/',
        subreddit:'javascript',
        subreddit_name_prefixed:'r/javascript',
        title:'Is PHP better?',
        votes: 3000,
        introText:'Should I learn PHP instead of Javascript?',
        author:'d.abramov',
        postedTime:'3 hours ago',
    };

    const post3 = {
        postId: '3',
        permalink:'/r/webdev/comments/3/',
        subreddit:'webdev',
        subreddit_name_prefixed:'r/webdev',
        votes: 3000,
        title:'JQuery use finally peaked in 2021 ',
        introText:'JQuery decline has begun. We owe JQuery a huge debt',
        author:'m.appleton',
        postedTime:'1 hours ago',
    };
    
    const posts = [post1, post2, post3 ];
    return (
        <div className="posts">
            <ul className="postsList">
            {posts.map(post => <li key={post.postId}><Post data={post} pageType={props.pageType}/></li>)}
            </ul>
        </div>
    );
}