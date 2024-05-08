import React from 'react'
import './Wrapper.css'

function Wrapper({ className, children, ...props }) {
    return (
        <div {...props} className={`wrapper-main ${className !== undefined ? className : ''}`} > {children}</div >
    )
}

export default Wrapper