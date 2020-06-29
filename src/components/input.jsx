import React from 'react';

export const Input = (props) => {
    let { className, ...rest } = props;
    return (
        <div>
            <input className={`input b-gray0 ${className}`} {...rest} />
        </div>
    );
};