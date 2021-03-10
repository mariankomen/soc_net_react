import React from 'react'

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogsPage

                    let AddMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    const OnMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
                    }
                    return(
                        <Dialogs addMessage={AddMessage}
                                 updateNewMessageText={OnMessageChange}
                                 dialogsPage={state}
                                 newMessageText={state.newMessageText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer