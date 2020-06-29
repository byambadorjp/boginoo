import React from 'react';
import { Button } from './';

export const Navigation = (props) => {

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>Нэвтрэх</Button>
        </div>
    );
};