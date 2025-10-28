import React from 'react'

const ListItem = (props) => {
    return (
        <div className='item'>
            <p>{props.index + 1}. {props.todo}</p>
            <button onClick={props.Delete}>Delete</button>
        </div>
    )
}

export default ListItem