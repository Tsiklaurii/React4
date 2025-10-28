import React from 'react'

const TodoList = ({ todos = [] }) => {
    return (
        <div>
            {todos.map((todo, index) => (<p className='list_item'>{index + 1}. {todo}</p>))}
        </div>
    )
}

export default TodoList