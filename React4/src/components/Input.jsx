import React, { useState } from 'react'
import TodoList from './TodoList';

const Input = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input) {
            setTodos([...todos, input])
            setInput("");
        }
    }

    return (
        <div className='todo_list'>
            <input type="text" placeholder='Enter todo' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <TodoList todos={todos} />
        </div>
    )
}

export default Input