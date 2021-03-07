import React from 'react'


import DialogItem from './DialogItem/DialogItem'
import Message from "./message/Message";
import s from './dialogs.module.css'


const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Sanya'},
        {id: 2, name: 'Vova'},
        {id: 3, name: 'Kolia'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Marian'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Andrew'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'React is so hard kurw'},
        {id: 5, message: 'Its cool!'},
    ]

    let dialogsElements = dialogs.map((item) => <DialogItem name={item.name} id={item.id}/>)
    let messagesElements = messages.map(message => <Message message={message.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs