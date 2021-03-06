import React from "react"

import './app.css'
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

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

