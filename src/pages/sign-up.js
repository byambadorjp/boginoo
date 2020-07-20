import React, { useContext, useState } from 'react';
import { Layout, Button, FormInput, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';
import { AuthContext } from '../providers/auth-user-provider';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase';

export const SignUp = () => {
    const history = useHistory();
    const { firebase, auth, firestore } = useFirebase();
    const [state, setState] = useState({username: '', email: '', password: '', password2: ''})
    const [error, setError] = useState('');

    const handleChangeUsername = (e) => setState({...state, username: e.target.value});
    const handleChangeEmail = (e) => setState({...state, email: e.target.value});
    const handleChangePassword = (e) => setState({...state, password: e.target.value});
    const handleChangePassword2 = (e) => setState({...state, password2: e.target.value});

    const signUp = async () => {
        if (!(state.email && state.password && state.password2)) {
            setError('Please enter the required fields');
            return;
        }
        if (state.password !== state.password2) {
            setError('Password does not match');
            return;
        }

        try {
            let cred = await auth.createUserWithEmailAndPassword(state.email, state.password);
            await firestore.collection('users').doc(cred.user.uid).set({
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                username: state.username
            });
            history.push('/');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <Layout>
            <div className='h100 flex justify-center'>
                <div className='form w-8 flex-col justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <IconStartBracket />
                        <IconDash />
                        <IconEndBracket />
                    </div>
                    <div className='font-lobster c-primary fs-30 lh-32'>
                        Boginoo
                    </div>
                    <div className='font-ubuntu fs-20 lh-23 bold c-primary'>Бүртгүүлэх</div>
                    <FormInput label='Хэрэглэгчийн нэр' type='text' placeholder='username' className='h-5 w-8' value={state.username} onChange={handleChangeUsername}/>
                    <FormInput label='Цахим хаяг' type='email' placeholder='name@mail.domain' className='h-5 w-8' value={state.email} onChange={handleChangeEmail}/>
                    <FormInput label='Нууц үг' type='password' placeholder='password' className='h-5 w-8' value={state.password} onChange={handleChangePassword} />
                    <FormInput label='Нууц үгээ давтна уу?' type='password' placeholder='password' className='h-5 w-8' value={state.password2} onChange={handleChangePassword2} />

                    <Button className='font-ubuntu w-8 fs-20 lh-23 bold c-default h-5 ph-4 b-primary' onClick={signUp}>Бүртгүүлэх</Button>
                    {error && <div className='font-ubuntu w-8 fs-12 lh-14 bold' style={{color: 'red'}}>{error}</div>}
                </div>
            </div>
        </Layout>
    )
}