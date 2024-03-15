import React from 'react'
import { TodoPreview } from './TodoPreview'

export const TodoList = ({todos,onDeleteTodo}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return <TodoPreview key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}/>
            })}
        </ul>
    )
}
