import React from 'react'

import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map((item) => <Post message={item.message} likesCount={item.likesCount} key={item.id}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}

                />
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts