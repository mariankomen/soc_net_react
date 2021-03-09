import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

import store from "./redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState() }
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

