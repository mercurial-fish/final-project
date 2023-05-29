import React from 'react'
import ToDoItem from './ToDoItem'

export default function ListOfToDos({ todos, toggleTodo, deleteTodo, styles }) {
  return (
    <ul className={styles.list}>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <ToDoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
