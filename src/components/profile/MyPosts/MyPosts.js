import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.posts.map((item) => <Post message={item.message} likesCount={item.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch({type: "ADD_POST"})
    }
    let onPostChange = (newPostElement) => {
        let text = newPostElement.target.value
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
    }


    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}

                />

                <button onClick={addPost}>Add post</button>
            </div>
            {postElements}
        </div>

    )
}

export default MyPosts