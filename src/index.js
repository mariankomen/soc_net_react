import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import state from "./redux/state";



ReactDOM.render(
  <React.StrictMode>
        <App state={state}

        />
  </React.StrictMode>,
  document.getElementById('root')
);

