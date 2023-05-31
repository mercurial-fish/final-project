import React from 'react'
import ToDoItem from './ToDoItem'

export default function ListOfToDos({ todos, toggleTodo, deleteTodo, styles }) {

  /*NOTE - if the length of the todos array is 0, then it will return "No To-dos".
  Otherwise, it will map over the todos array and return the To-do Item. {...todo} returns all the properties
  of each todo */
  return (
    <div className={styles.list}>
    <ul>
      {todos.length === 0 && "No To-Dos"}
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
