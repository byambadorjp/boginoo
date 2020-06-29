import React from 'react';

export const Button = (props) => {
    let { children, disabled, className, ...others } = props;
    return (
        <button className={`btn ${className} ${disabled && 'disabled'}`} {...others} >
            {children}
        </button>
    );
};