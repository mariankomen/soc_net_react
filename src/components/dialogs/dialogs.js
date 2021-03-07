import React from 'react'


import DialogItem from './DialogItem/DialogItem'
import Message from "./message/Message";
import s from './dialogs.module.css'


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((item) => <DialogItem name={item.name} id={item.id}/>)
    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>)

    let NewMessageText = React.createRef()
    let AddMessage = () => {
        let mesText = NewMessageText.current.value
        alert(mesText)
        NewMessageText.current.value = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <textarea ref={NewMessageText}></textarea>
                <button onClick={AddMessage}>Click</button>
            </div>
        </div>
    )
}

export default Dialogs