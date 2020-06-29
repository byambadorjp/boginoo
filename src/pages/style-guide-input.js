import React from 'react';
import { Input } from '../components';

export const StyleGuideInput = () => {
    return (
        <div className='h100 flex justify-center'>
            <div className='flex-col'>
                <h1 className='font-ubuntu flex-center'>Inputs</h1>

                <h1 className='font-ubuntu'>Энгийн</h1>
                <p>{'<Input />'}</p>
                <Input />

                <h1 className='font-ubuntu'>Style, placeholder нэмсэн</h1>
                <p>{'<Input className="h-5 w-8 c-primary" placeholder="firstname" />'}</p>
                <Input className='h-5 w-8 c-primary' placeholder="firstname" />

                <h1 className='font-ubuntu'>disabled</h1>
                <p>{'<Input className="h-5 w-8" placeholder="https://www.web-huudas.mn" disabled />'}</p>
                <Input className='h-5 w-8' placeholder='https://www.web-huudas.mn' disabled />

                <h1 className='font-ubuntu'>onClick event-тэй</h1>
                <p>{'<Input className="h-5 w-8" placeholder="password" type="password"/>'}</p>
                <Input className='h-5 w-8' placeholder='password' type='password'/>
            </div>
        </div>
    )
}