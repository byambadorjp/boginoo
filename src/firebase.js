import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export const useFirebase = () => {
    let [state, setState] = useState({ firebase });
    useEffect(() => {
        let app = firebase.initializeApp(config);
        let auth = firebase.auth(app);
        setState({ app, auth, firebase });
    }, []);
    return state;
};