import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import  {variable} from "../../variable";



const MyPosts = () => {

    let posts = [
        {id: 1, post: 'Hi, how are you?', count: 7},
        {id: 2, post: "It's my first post", count: 17},
        {id: 3, post: 'Sveta', count: 5},
        {id: 4, post: 'Sasha', count: 4},
        {id: 5, post: 'Viktor', count: 3},
        {id: 6, post: 'Valerius', count: 6},
    ];

    let postsElemets = posts.map( p => <Post message ={p.post} countLike={p.count} />);

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div className={s.areaBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElemets}
                {/*<Post message ={posts[0].post} countLike={posts[0].count} />*/}
                {/*<Post message ={posts[1].post} countLike={posts[1].count} />*/}
                {/*<Post message ={posts[2].post} countLike={posts[2].count} />*/}
                {/*<Post message ={posts[3].post} countLike={posts[3].count} />*/}
                {/*<Post message ={posts[4].post} countLike={posts[4].count} />*/}
                <Post message ={variable.postT} countLike="4" />

            </div>
        </div>
    );
}




export default MyPosts;
