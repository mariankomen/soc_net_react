import React from "react"

import './app.css'
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<Profile/>*/}


        </div>
    )
}


export default App

