import React, { useContext } from 'react';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from './';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/auth-user-provider';

export const Navigation = (props) => {
    const { user, signOut } = useContext(AuthContext);

    let location = useLocation();
    const history = useHistory();

    const navigateLogin = () => {
        history.push('/login')
    }

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>

            {user && 
                <>
                    <div className='font-ubuntu fs-20 lh-23 bold ml-4'>{user.email.split('@')[0]}</div>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default ml-2 b-primary' onClick={signOut} icon={faSignOutAlt} />
                </>
            }
            
            {(!user && !location.pathname.match('/login')) &&
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={navigateLogin}>Нэвтрэх</Button>}
        </div>
    );
};