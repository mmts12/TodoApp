import React from 'react'
import { TodoPreview } from './TodoPreview'

export const TodoList = ({todos,onDeleteTodo,onDone}) => {
    return (
        <ul>
            {todos.map((todo) => {
                return <TodoPreview key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onDone={onDone}/>
            })}
        </ul>
    )
}
