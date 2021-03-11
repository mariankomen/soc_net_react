import React from "react"

import './app.css'
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route} from 'react-router-dom'
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/profile'
                           render={()=> <Profile />}/>

                    <Route path='/dialogs'
                           render={()=> <DialogsContainer />}/>

                    <Route path='/users' render={() => <UsersContainer/>}/>

                    <Route path='/news' render={()=> <News/>}/>
                    <Route path='/music' render={()=> <Music/>}/>
                    <Route path='/settings' render={()=> <Settings/>}/>

                </div>
                {/*<ProfileInfo/>*/}
            </div>
    )
}


export default App

