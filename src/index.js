import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import reducer from "./store/reduser"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'));
