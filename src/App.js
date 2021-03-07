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


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/profile' render={()=> <Profile
                        posts={props.posts}/>}/>
                    <Route path='/dialogs' render={()=> <Dialogs
                        dialogs={props.dialogs}
                        messages={props.messages}
                    />}/>
                    <Route path='/news' render={()=> <News/>}/>
                    <Route path='/music' render={()=> <Music/>}/>
                    <Route path='/settings' render={()=> <Settings/>}/>

                </div>
                {/*<ProfileInfo/>*/}
            </div>
        </BrowserRouter>
    )
}


export default App

