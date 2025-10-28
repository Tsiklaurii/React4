import React from 'react'
import ListItem from './ListItem'

const DisplayTodos = (props) => {
    return (
        <div>
            {props.todos.map((todo, index) => (<ListItem index={index} todo={todo} Delete={() => props.Delete(index)} />))}
        </div>
    )
}

export default DisplayTodos