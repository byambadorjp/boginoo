import React, { createContext, useEffect, useState } from 'react';
import { useFirebase } from '../firebase';

export const AuthContext = createContext({
    user: null,
    ready: false
});

export const AuthUserProvider = ({ children }) => {
    let [state, setState] = useState({
        ready: false,
        user: null
    });
    let { auth } = useFirebase();

    useEffect(() => {
        if (!auth) {
            return;
        }
        const subscribe = auth.onAuthStateChanged(authUser => {
            authUser ? setState({ ready: true, user: authUser }) : setState({ ready: true, user: null });
        });

        return () => subscribe()
    }, [auth]);
    return (
        <AuthContext.Provider value={{ ...state }}>
            {children}
        </AuthContext.Provider>
    );
};
