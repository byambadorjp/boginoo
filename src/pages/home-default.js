import React, { useState, useEffect, useContext } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket, Url } from '../components/';
import { AuthContext } from '../providers/auth-user-provider';
import { useFirebase } from '../firebase';
import randomstring from 'randomstring'


export const HomeDefault = () => {
    const [inputUrl, setInputUrl] = useState('');
    const { ready, user } = useContext(AuthContext);
    const { firebase, firestore } = useFirebase();
    const [recent, setRecent] = useState(null);

    const handleChange = (e) => setInputUrl(e.target.value);

    const boginoo = () => {
        const shortenedId = randomstring.generate(7);
        firestore.collection('shortened').doc(shortenedId).set({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email: user.email,
            inputUrl: inputUrl,
            outputUrl: `https://boginoo.firebaseapp.com/${shortenedId}`
        })
    }

    useEffect(() => {
        if (user && firestore) {
            console.log(user.email);
            firestore.collection('shortened').where("email", "==", user.email)
                .orderBy("createdAt", "desc")
                .limit(1)
                .onSnapshot(function (q) {
                    q.forEach(function (doc) {
                        const r = doc.data();
                        setRecent({inputUrl: r.inputUrl, outputUrl: r.outputUrl});
                    });
                });
        }
    }, [user, firestore]);

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className='h-5 w-8' placeholder='https://www.web-huudas.mn' value={inputUrl} onChange={handleChange} />
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={boginoo}>Богиносгох</Button>
                </div>

                {
                    (user && recent) &&
                    <div>
                        <Url type='input' url={recent.inputUrl} />
                        <Url type='output' url={recent.outputUrl} />
                    </div>
                }
            </div>
        </Layout>
    )
}