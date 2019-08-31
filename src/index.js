import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <div>
            <App/>
        </div>
    </BrowserRouter>

    ,
    document.getElementById('root'));
/* ReactDOM.render( <div > <Header / > </div>, document.getElementById('root1')); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
