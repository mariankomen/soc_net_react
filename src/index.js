import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

import state, {addPost, subscribe, updateNewPostText} from "./redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

subscribe(rerenderEntireTree)

