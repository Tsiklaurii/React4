import React, { useState } from 'react'
import DisplayTodos from './DisplayTodos';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    const addTodo = () => {
        if (todos.length >= 5) {
            return
        } else if (input) {
            setTodos([...todos, input])
            setInput("")
        }
    }

    const Delete = (index) => {
        const newTodos = todos.filter((todo, i) => i !== index);
        setTodos(newTodos)
    };

    let message = "";

    if (todos.length === 0) {
        message = <p className="message">Todo list is empty</p>;
    } else if (todos.length === 5) {
        message = <p className="message">Limit is 5</p>;
    }

    return (
        <div className='todo_list'>
            <input type="text" placeholder='Enter todo' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>

            <DisplayTodos todos={todos} Delete={Delete} />
            {message}
        </div>
    )
}

export default TodoList