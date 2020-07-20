import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout } from '../components/';
import { useFirebase } from '../firebase';

export const Shortener = () => {
    let location = useLocation();
    const { firestore } = useFirebase();

    useEffect(() => {
        const shortenedId = location.pathname.slice(1);
        if (firestore){
            firestore.collection('shortened').doc(shortenedId)
            .get()
            .then((doc) => {
                window.location.href = doc.data().inputUrl; 
            });
        }
    }, [firestore]);

    return (
        <Layout>
            <div>Routing...</div>
        </Layout>
    )
}