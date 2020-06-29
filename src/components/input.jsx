import React from 'react';

export const Input = (props) => {
    let { className, disabled, ...rest } = props;
    return (
        <div>
            <input className={`input b-gray0 ${className} ${disabled && 'disabled'}`} {...rest} />
        </div>
    );
};