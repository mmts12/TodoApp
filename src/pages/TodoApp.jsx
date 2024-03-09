import React, { useEffect, useState  } from 'react'
import { todoService } from '../services/todoService'



export const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [txt, setTxt] = useState('')


  function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

  useEffect(() => {
    setTodos(todoService.query())

  }, [])


  const onInsertNewTodo = (ev) => {
    setTxt(ev.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault()
    const  todo = {
      id : guidGenerator(),
      txt,
      isDone:false
    }
    const copyTodos = [...todos,todo]
    setTodos(copyTodos);
    setTxt('');
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={(event) =>  addTodo(event)}>
        <span>Insert new todo
        </span>
        <input type="text" name="" value={txt} onChange={(ev) => onInsertNewTodo(ev)} />
      </form>
      <div>
        {todos.map((todo)=>{
          return <li key={todo.id}>{todo.txt}</li>
        })}
      </div>
    </div>
  )
}
