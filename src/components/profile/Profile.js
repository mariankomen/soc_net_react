import React from 'react'

import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile