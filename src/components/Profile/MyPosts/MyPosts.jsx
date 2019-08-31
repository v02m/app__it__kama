import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import  {variable} from "../../variable";



const MyPosts = () => {
    let postData = [
        {id: 1, post: 'Hi, how are you?', count: 7},
        {id: 2, post: "It's my first post", count: 17},
        {id: 3, post: 'Sveta', count: 5},
        {id: 4, post: 'Sasha', count: 4},
        {id: 5, post: 'Viktor', count: 3},
        {id: 6, post: 'Valera', count: 6},
    ];
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
                <Post message ={postData[0].post} countLike={postData[0].count} />
                <Post message ={postData[1].post} countLike={postData[1].count} />
                <Post message ={postData[2].post} countLike={postData[2].count} />
                <Post message ={postData[3].post} countLike={postData[3].count} />
                <Post message ={postData[4].post} countLike={postData[4].count} />
                <Post message ={variable.postT} countLike="4" />

            </div>
        </div>
    );
}




export default MyPosts;
