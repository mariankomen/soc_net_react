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
    return(
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Sanya' id='1'/>
                <DialogItem name='Masha' id='2'/>
                <DialogItem name='Vanya' id='3'/>
                <DialogItem name='Marian' id='4'/>
                <DialogItem name='Kolia' id='5'/>
                <DialogItem name='Nastya' id='6'/>


            </div>
            <div className={s.messages}>
                <Message message='Hello vasia'/>
                <Message message='Marian ebas'/>
                <Message message='React.js is zbs'/>

            </div>
        </div>
    )
}

export default Dialogs