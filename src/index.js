import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

let posts = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'Top music ever ', likesCount: 2},
    {id: 3, message: 'Jojo is top', likesCount: 13},
    {id: 4, message: 'Kure', likesCount: 52},
]
let dialogs = [
    {id: 1, name: 'Sanya'},
    {id: 2, name: 'Vova'},
    {id: 3, name: 'Kolia'},
    {id: 4, name: 'Andrew'},
    {id: 5, name: 'Marian'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Andrew'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'React is so hard kurw'},
    {id: 5, message: 'Its cool!'},
]


ReactDOM.render(
  <React.StrictMode>
        <App posts={posts}
             dialogs={dialogs}
             messages={messages}

        />
  </React.StrictMode>,
  document.getElementById('root')
);

