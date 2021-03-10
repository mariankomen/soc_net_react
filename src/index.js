import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

import store from "./redux/redux-store";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState() }
                 dispatch={store.dispatch.bind(store)}
                 store={store}


            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})

