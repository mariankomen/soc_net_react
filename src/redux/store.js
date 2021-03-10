import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store
