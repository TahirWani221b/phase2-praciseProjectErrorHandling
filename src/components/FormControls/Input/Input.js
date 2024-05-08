import React from 'react'
import './Input.css'

function Input({ type = "text", ...props }) {
    return (
        <input type={type} {...props}></input>
    )
}

export default Input