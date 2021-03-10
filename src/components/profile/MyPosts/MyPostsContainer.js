import React from 'react'

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts} //Нам треба передати пости в чисту компоненту, бо вона приймає пропси від кількох
                             newPostText={state.profilePage.newPostText}
                    />
                )
            }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer