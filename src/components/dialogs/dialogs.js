import React from 'react'

import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


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