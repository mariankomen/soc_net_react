import React from 'react'

import DialogItem from './DialogItem/DialogItem'
import Message from "./message/Message";
import s from './dialogs.module.css'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((item) => <DialogItem name={item.name} id={item.id}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)

    let AddMessage = () => {
        props.addMessage()
    }

    const OnMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.dialogsPage.newMessageText}
                          onChange={OnMessageChange}
                />
                <button onClick={AddMessage}>Click</button>
            </div>
        </div>
    )
}

export default Dialogs