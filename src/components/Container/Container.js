import React from 'react'
import './Container.css'

function Container({ className, children, ...props }) {
    return (
        <div {...props} className={`container ${className !== undefined ? className : ''}`} > {children}</div >
    )
}

export default Container