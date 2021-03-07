import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Top music ever ', likesCount: 2},
        {id: 3, message: 'Jojo is top', likesCount: 13},
        {id: 4, message: 'Kure', likesCount: 52},
    ]


    let postElements = posts.map((item) => <Post message={item.message} likesCount={item.likesCount}/>)
    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postElements}
        </div>

    )
}

export default MyPosts