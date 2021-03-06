import React from 'react'

import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Sanya</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/2'>Maria</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Kolia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Marian</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Nastya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Zjenia</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Let it be</div>
                <div className={s.message}>Jumaaa</div>
            </div>
        </div>
    )
}

export default Dialogs