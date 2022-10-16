import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import {AuthContext} from './context';


const firebaseConfig = {
    apiKey: 'AIzaSyBlm2MRQ8D3zDy0yz2Ymcaq48wcDzmpUF0',
    authDomain: 'react-chat-b1ae7.firebaseapp.com',
    projectId: 'react-chat-b1ae7',
    storageBucket: 'react-chat-b1ae7.appspot.com',
    messagingSenderId: '791475558843',
    appId: '1:791475558843:web:a8c4e89218b3ec1b5a8c9e'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContext.Provider value={{
        firebase,
        firestore,
        auth
    }}>
        <App/>

    </AuthContext.Provider>
);
