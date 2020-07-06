import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = (props) => {
    let { children, disabled, className, icon, ...others } = props;
    if (icon) {
        return (
            <button className={`btn ${className} ${disabled && 'disabled'}`} {...others} >
                <FontAwesomeIcon icon={icon} />
            </button>
        )
    }

    return (
        <button className={`btn ${className} ${disabled && 'disabled'}`} {...others} >
            {children}
        </button>
    );
};