import React from 'react'
import ToDoItem from './ToDoItem'

export default function ListOfToDos({ todos, toggleTodo, deleteTodo, styles }) {
  return (
    <div className={styles.list}>
    <ul>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <ToDoItem
            {...todo}
            key={todo.id}
            styles={styles}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
    </div>
  )
}
