import React from 'react'

import s from './navbar.module.css'

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}><a href='#'>Profile</a></div>
            <div className='item'><a href='#'>Messages</a></div>
            <div className='item'><a href='#'>News</a></div>
            <div className='item'><a href='#'>Music</a></div>
            <div className='item'><a href='#'>Settings</a></div>
            <div className={s.item}><a>Huynya</a></div>
        </nav>
    )
}

export default Navbar