import React from 'react'
import './UsersList.css'

function UsersList({ listData }) {
    return (
        <ul>
            {
                listData.map((element, index) => (
                    <li key={index}>{element}</li>
                ))
            }
        </ul>
    )
}

export default UsersList