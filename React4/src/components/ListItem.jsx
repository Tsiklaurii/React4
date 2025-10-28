import React from 'react'

const ListItem = ({ index, text, Delete }) => {
    return (
        <div className='item'>
            <p>{index + 1}. {text}</p>
            <button onClick={Delete}>Delete</button>
        </div>
    )
}

export default ListItem