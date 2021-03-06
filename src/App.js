import React from "react"

import './app.css'
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>

        </div>
    )
}


export default App

