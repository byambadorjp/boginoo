import React from 'react';
import { Button } from '../components';

export const StyleGuideButton = () => {
    return (
        <div className='h100 flex justify-center'>
            <div className='flex-col'>
                <h1 className='font-ubuntu flex-center'>Buttons</h1>

                <h1 className='font-ubuntu'>Энгийн</h1>
                <p>{'<Button>Энгийн</Button>'}</p>
                <Button>Энгийн</Button>

                <h1 className='font-ubuntu'>Style нэмсэн</h1>
                <p>{'<Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-7 ph-4 mt-3 b-primary">Нэвтрэх</Button>'}</p>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 w-7 ph-4 mt-3 b-primary'>Нэвтрэх</Button>

                <h1 className='font-ubuntu'>disabled</h1>
                <p>{'<Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary" disabled>Богиносгох</Button>'}</p>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary' disabled>Богиносгох</Button>

                <h1 className='font-ubuntu'>onClick event-тэй</h1>
                <p>{'<Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-7 ph-4 mt-3 b-primary" onClick={() => { alert("login!") }}>Нэвтрэх</Button>'}</p>
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 w-7 ph-4 mt-3 b-primary' onClick={() => { alert("login!") }}>Нэвтрэх</Button>
            </div>
        </div>
    )
}