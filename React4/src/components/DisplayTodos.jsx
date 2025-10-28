import React from 'react'
import ListItem from './ListItem'

const DisplayTodos = ({ todos = [], Delete }) => {
    return (
        <div>
            {todos.map((todo, index) => (<ListItem index={index} text={todo} Delete={() => Delete(index)} />))}
        </div>
    )
}

export default DisplayTodos