import React from 'react'

import s from './dialogs.module.css'

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Sanya
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Sanya
                </div>
                <div className={s.dialog}>
                    Sanya
                </div>
                <div className={s.dialog}>
                    Sanya
                </div>
                <div className={s.dialog}>
                    Sanya
                </div>
                <div className={s.dialog}>
                    Sanya
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