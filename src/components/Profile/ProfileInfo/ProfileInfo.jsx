import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    className="content__img"
                    src="http://xcom-hobby.ru/var/files/b5/4b/57f5466b54bc3851495796_1000.jpg"
                    alt=""
                />
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}


export default ProfileInfo;
