import React from 'react'

export const TodoPreview = ({ todo, onDeleteTodo, onDone }) => {
    return (
        <div className='todo-preview-container'>
            <li  className={((todo.isDone)?'todo-preview-done todo-preview':'todo-preview')}>
                {todo.txt}
            </li>
            <button onClick={() => onDeleteTodo(todo.id)} >X</button>
            <button onClick={() => onDone(todo.id)} >Done</button>
        </div>
    )
}


// className='todo-preview's