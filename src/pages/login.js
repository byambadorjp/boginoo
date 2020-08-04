import React, { useContext, useState } from 'react';
import { Layout, Button, FormInput, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { AuthContext } from '../providers/auth-user-provider';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase';
import { useInput } from '../hooks/use-input';

export const Login = () => {
    const history = useHistory();
    const { ready, user } = useContext(AuthContext);
    const { auth } = useFirebase();

    const [email, bindEmail, resetEmail] = useInput('');
    const [password, bindPassword, resetPassword] = useInput('');

    const navigateToSignUp = () => { history.push('/signup') };
    const signIn = async () => {
        await auth.signInWithEmailAndPassword(email, password);
        resetEmail()
        resetPassword()
        //зөвхөн email -ийн утгийг reset хийж үзье
        history.push('/')
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
                    <div className='font-ubuntu fs-20 lh-23 bold c-primary'>Нэвтрэх</div>
                    <FormInput label='Цахим хаяг' type='email' placeholder='name@mail.domain' className='h-5 w-8' 
                        {...bindEmail} />
                    <FormInput label='Нууц үг' type='password' placeholder='password' className='h-5 w-8' 
                        {...bindPassword} />

                    <div className='w-8 flex justify-between items-center'>
                        <div className='font-ubuntu fs-12 c-primary'>Намайг сана</div>
                        <div className='font-ubunut fs-12 underline'>Нууц үгээ мартсан</div>
                    </div>

                    <Button className='font-ubuntu w-8 fs-20 lh-23 bold c-default h-5 ph-4 b-primary' onClick={signIn}>Нэвтрэх</Button>
                    <div className='font-ubuntu fs-12 c-primary underline' onClick={navigateToSignUp}>Шинэ хэрэглэгч бол энд дарна уу</div>
                </div>
            </div>
        </Layout>
    )
}