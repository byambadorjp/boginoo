import React, { useState, useEffect, useContext } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket, Url } from '../components/';
import { AuthContext } from '../providers/auth-user-provider';
import { useFirebase } from '../firebase';
import randomstring from 'randomstring'
import { useTimer } from '../hooks/use-timer';
import { useCollection } from '../hooks/use-collection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const HomeDefault = () => {
    const flag = useTimer(5);
    const { ready, user } = useContext(AuthContext);
    const { data, createDoc, deleteDoc } = useCollection(`users/${user ? user.uid : 'undefined'}/history`);

    const [inputUrl, setInputUrl] = useState('');
    const { firebase, firestore } = useFirebase();

    const handleChange = (e) => setInputUrl(e.target.value);

    const boginoo = () => {
        const shortenedId = randomstring.generate(7);
        createDoc(shortenedId, {
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email: user.email,
            inputUrl: inputUrl,
            outputUrl: `https://boginoo.firebaseapp.com/${shortenedId}`
        })
    }

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                {flag && <div className='font-lobster c-primary fs-56 lh-70'>
                    Boginoo
                </div>}
                <div className='mt-5 flex justify-center items-center'>
                    <Input className='h-5 w-8' placeholder='https://www.web-huudas.mn' value={inputUrl} onChange={handleChange} />
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={boginoo}>Богиносгох</Button>
                </div>
                {data &&
                    data.filter((item) => item.email === user.email).sort((a,b)=> a.createdAt < b.createdAt ? 1 : -1).map((item) => <div key={item.id} className='mt-4 pa-4 br-primary-2'>
                        <Url type='input' url={item.inputUrl} />
                        <Url type='output' url={item.outputUrl} />
                        <FontAwesomeIcon icon={faTrash} onClick={() => deleteDoc(item.id)}/>
                    </div>)}
            </div>
        </Layout>
    )
}