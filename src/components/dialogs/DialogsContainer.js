import React from 'react'

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let AddMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    
    const OnMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs addMessage={AddMessage}
                 updateNewMessageText={OnMessageChange}
                 dialogsPage={state}
                 newMessageText={state.newMessageText}
        />
    )
}

export default DialogsContainer