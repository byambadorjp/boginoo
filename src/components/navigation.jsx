import React from 'react';
import { Button } from './';
import { useHistory, useLocation } from 'react-router-dom';

export const Navigation = (props) => {
    let location = useLocation();
    const history = useHistory();

    const navigateLogin = () => {
        history.push('/login')
    }

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>

            {!location.pathname.match('/login') &&
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={navigateLogin}>Нэвтрэх</Button>}
        </div>
    );
};