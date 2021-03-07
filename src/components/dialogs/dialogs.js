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
    let dialogsData = [
        {id: 1, name: 'Sanya'},
        {id: 2, name: 'Vova'},
        {id: 3, name: 'Kolia'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Marian'},
    ]
    let messagessData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Andrew'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'React is so hard kurw'},
        {id: 5, message: 'Its cool!'},
    ]



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>



            </div>
            <div className={s.messages}>
                <Message message={messagessData[0].message}/>
                <Message message={messagessData[1].message}/>
                <Message message={messagessData[2].message}/>
                <Message message={messagessData[3].message}/>

            </div>
        </div>
    )
}

export default Dialogs