import React, { useEffect, useState } from 'react'
import { TodoList } from '../cmps/TodoList'
import { todoService } from '../services/todoService'



export const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [txt, setTxt] = useState('')

  useEffect(() => {
    setTodos(todoService.query())
  }, [])


  const onInsertNewTodo = (ev) => {
    setTxt(ev.target.value);
  }

  const onAddTodo = (event) => {
    event.preventDefault()
    const todo = {
      id: todoService.guidGenerator(),
      txt,
      isDone: false
    }
    const copyTodos = [...todos, todo]
    setTodos(copyTodos);
    setTxt('');
  }

  const onDeleteTodo = (todoId) => {
    let copyTodos = [...todos]
    copyTodos = copyTodos.filter((todo) => todo.id !== todoId)
    setTodos(copyTodos);
  }

  return (
    <>
      <h1>Todo App2</h1>
      <div>
        <form onSubmit={(event) => onAddTodo(event)}>
          <span>Insert new todo
          </span>
          <input type="text" name="" value={txt} onChange={(ev) => onInsertNewTodo(ev)} />
        </form>
        <div>
          <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
        </div>
      </div>
    </>
  )
}
