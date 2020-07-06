import React, { createContext, useEffect, useState } from 'react';
import { useFirebase } from '../firebase';

export const AuthContext = createContext({
    user: null,
    ready: false,
    signUpWithEmailAndPassword: () => { },
    signInWithEmailAndPassword: () => { },
    signOut: () => { }
});

export const AuthUserProvider = ({ children }) => {
    let [state, setState] = useState({
        ready: false,
        user: null
    });
    let { auth } = useFirebase();

    const signUpWithEmailAndPassword = auth ? (email, password) => auth.createUserWithEmailAndPassword(email, password) : () => { };
    const signInWithEmailAndPassword = auth ? (email, password) => auth.signInWithEmailAndPassword(email, password) : () => { };
    const signOut = auth ? () => auth.signOut() : () => { };

    useEffect(() => {
        if (!auth) {
            return;
        }
        const subscribe = auth.onAuthStateChanged(authUser => {
            authUser ? setState({ ready: true, user: authUser }) : setState({ ready: true, user: authUser });
        });

        return () => subscribe()
    }, [auth]);
    return (
        <AuthContext.Provider value={{ ...state, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
