import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Top music ever ', likesCount: 2},
        {id: 3, message: 'Jojo is top', likesCount: 13},
        {id: 4, message: 'Kure', likesCount: 52},


    ]
    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
        </div>

    )
}

export default MyPosts