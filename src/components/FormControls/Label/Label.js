import React from 'react'
import './Label.css'

function Label({ text = "Label", ...props }) {
    return (
        <label {...props} >{text}</label>
    )
}

export default Label