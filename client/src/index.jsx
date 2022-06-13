import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.component';
import { Provider } from 'react-redux';
import { store } from './store';

export var apiBaseUrl = process.env.NODE_ENV === 'production' ?
    'https://mern-photo-sharing-app.herokuapp.com' :
    'http://localhost:5000';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);