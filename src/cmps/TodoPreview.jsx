import React from 'react'

export const TodoPreview = ({ todo, onDeleteTodo }) => {
    return (
        <div className='todo-preview-container'>
            <li className='todo-preview'>
                {todo.txt}

            </li>
            <button onClick={() => onDeleteTodo(todo.id)} >X</button>
            <button >Done</button>
        </div>
    )
}


