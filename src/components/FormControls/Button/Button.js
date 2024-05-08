import React from 'react'
import './Button.css'

function Button({ type = "submit", text = "Button", ...props }) {
    return (
        <button type={type} {...props}>{text}</button>
    )
}

export default Button