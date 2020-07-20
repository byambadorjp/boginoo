import React from 'react';

export const Url = ({type, url}) => {
    if (type === 'input'){
        return (
            <div className='mt-4 w-9'>
                <div className='font-ubuntu fs-12 lh-18 opacity-5'>Өгөгдсөн холбоос</div>
                <div className='font-ubuntu fs-12 lh-18 w-8'>{url}</div>
            </div>    
        )
    }

    return (
        <div className='mt-4 w-9'>
            <div className='font-ubuntu fs-12 lh-18 opacity-5'>Богино холбоос</div>
            <div className='flex justify-between'>
                <div className='font-ubuntu fs-12 lh-18 w-8'>{url}</div>
                <div className='font-ubuntu fs-12 lh-18 c-primary underline'>хуулж авах</div>
            </div>
        </div>
    );
};