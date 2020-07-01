import React from 'react';

export const FormInput = (props) => {
    let { className, label, disabled, ...rest } = props;
    return (
        <div>
            <div className='ph-4 font-ubuntu fs-12 lh-18'>{label}</div>
            <input className={`input mt-2 ${className} ${disabled && 'disabled'}`} {...rest} />
        </div>
    );
};