import React from "react"

import './app.css'
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/dialogs";
import {Route, BrowserRouter} from 'react-router-dom'
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    )
}


export default App

