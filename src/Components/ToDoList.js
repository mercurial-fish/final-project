import React, { useEffect, useState } from "react"
import NewToDoForm from "./To-Do-Components/NewToDoForm"
import ListOfToDos from "./To-Do-Components/ListOfToDos"
import styles from "../Styles/toDoList.module.css"

export default function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className={styles.toDoContainer}>
      <h1 className={styles.header}>To-Do List</h1>
      <NewToDoForm addTodo={addTodo} styles={styles} />
      <ListOfToDos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} styles={styles} />
    </div>
  )
}
