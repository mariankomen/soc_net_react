import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='hello first post' likesCount='15'/>
            <Post message='Hello, it`s a second post))' likesCount='25'/>
        </div>

    )
}

export default MyPosts