const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let store = {
    _state: {
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

    },
    _callSubscriber(){
        console.log('state is changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    dispatch(action){
        if(action.type === "ADD_POST"){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default store
window.store = store
