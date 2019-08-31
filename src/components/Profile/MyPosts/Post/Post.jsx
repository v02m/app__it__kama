import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    console.log(props.message);
    return (

        <div className={s.item}>
            <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' alt="#" />
            {props.message}
            <div>
                <span>Lke </span>
                {props.outLike}
            </div>
        </div>


    );
}




export default Post;
