import {rerenderEntireTree} from "../rerender";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'Top music ever ', likesCount: 2},
            {id: 3, message: 'Jojo is top', likesCount: 13},
            {id: 4, message: 'Kure', likesCount: 52}
        ],
        newPostText: 'it-dsf'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Andrew'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'React is so hard kurw'},
            {id: 5, message: 'Its cool!'},
        ],
        dialogs: [
            {id: 1, name: 'Sanya'},
            {id: 2, name: 'Vova'},
            {id: 3, name: 'Kolia'},
            {id: 4, name: 'Andrew'},
            {id: 5, name: 'Marian'},
        ],
    },

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)

}

export default state
