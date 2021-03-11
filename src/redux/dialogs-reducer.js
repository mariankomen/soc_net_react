const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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
}

let NewID = 6

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMes = {
                id: NewID++,
                message: state.newMessageText,
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMes]
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state

    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export default dialogsReducer