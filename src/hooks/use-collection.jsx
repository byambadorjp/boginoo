import { useFirebase } from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';

export const useCollection = (path) => {
    const [data, setData] = useState([]);
    const { firestore } = useFirebase();


    useEffect(() => {
        if (firestore && path.split('/').length % 2) {
            const unsubscribe = firestore.collection(path).onSnapshot((s) => {
                setData(s.docs.map((doc) => ({...doc.data(), id: doc.id})));
            })

            return () => unsubscribe();
        }
    }, [firestore, path]);

    const createDoc = (id, data) => {
        firestore.collection(path).doc(id).set(data);
    }

    const updateDoc = (id, data) => {
        firestore.collection(path).doc(id).set(data, {merge: true});
    }

    const deleteDoc = (id) => {
        firestore.collection(path).doc(id).delete();
    }


    return { data, createDoc, updateDoc, deleteDoc};
}