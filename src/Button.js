// Button.js
import React from 'react';
import "./button.css"
const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className='btn'>
            {children}
        </button>
    );
}

export default Button;
