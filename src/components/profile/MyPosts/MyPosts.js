import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postElements = props.posts.map((item) => <Post message={item.message} likesCount={item.likesCount}/>)
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