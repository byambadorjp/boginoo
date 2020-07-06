import React, { useContext, useState } from 'react';
import { Layout, Button, FormInput, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';
import { AuthContext } from '../providers/auth-user-provider';
import { useHistory } from 'react-router-dom';

export const SignUp = () => {
    const history = useHistory();
    const { ready, user, signUpWithEmailAndPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    if (!ready) {
        return (<Layout>
            <h1>LOADING...</h1>
        </Layout>)
    }

    if (user) {
        history.push('/')
    }

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangePassword2 = (e) => setPassword2(e.target.value);

    const signUp = async () => {
        if (!(email && password && password2)) {
            setError('Please enter the required fields');
            return;
        }
        if (password !== password2) {
            setError('Password does not match');
            return;
        }

        try {
            await signUpWithEmailAndPassword(email, password);
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
                    <FormInput label='Цахим хаяг' type='email' placeholder='name@mail.domain' className='h-5 w-8' value={email} onChange={handleChangeEmail}/>
                    <FormInput label='Нууц үг' type='password' placeholder='password' className='h-5 w-8' value={password} onChange={handleChangePassword} />
                    <FormInput label='Нууц үгээ давтна уу?' type='password' placeholder='password' className='h-5 w-8' value={password2} onChange={handleChangePassword2} />

                    <Button className='font-ubuntu w-8 fs-20 lh-23 bold c-default h-5 ph-4 b-primary' onClick={signUp}>Бүртгүүлэх</Button>
                    {error && <div className='font-ubuntu w-8 fs-12 lh-14 bold' style={{color: 'red'}}>{error}</div>}
                </div>
            </div>
        </Layout>
    )
}