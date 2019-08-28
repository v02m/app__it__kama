import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    className="content__img"
                    src="http://xcom-hobby.ru/var/files/b5/4b/57f5466b54bc3851495796_1000.jpg"
                    alt=""
                />
            </div>

            <div>ava+description</div>
            <MyPosts/>
        </div>
    );
}




export default Profile;
