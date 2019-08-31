import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import  {variable} from "../../variable";



const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message ="Hi, how are you?" outLike="6" />
                <Post message ="It's my first post" outLike="5" />
                <Post message ={variable.postT} outLike="4" />

            </div>
        </div>
    );
}




export default MyPosts;
