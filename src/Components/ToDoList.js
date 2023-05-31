import React, { useEffect, useState } from "react"
import NewToDoForm from "./To-Do-Components/NewToDoForm"
import ListOfToDos from "./To-Do-Components/ListOfToDos"
import styles from "../Styles/toDoList.module.css"


export default function ToDoList() {

  /*NOTE - whatever is returned from the function is the default value for the useState. If the localValue
  is null, then it's an empty array. If not, will return the JSON.parse of the localValue.  */
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  /*NOTE - runs this function every time the objects inside the array of our second property change. The function
  is saving the todo list to local storage. The property of ITEMS is equal to the JSON.stringify of our todos */
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  /*NOTE - takes in the input and adds it to the empty array of currentTodos. It is an array of objects,
  with the properties of id, title and completed (which is a boolean). When adding the todo, the id will be randomly generated, the input
  will become the title and the completed property will be false, since the completed property is in charge of the checkbox and we 
  don't want the checkbox to be filled in when the todo is added */
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  /*NOTE - takes in the id of todo and the property of completed and returns the current todos, but if the checkbox for the particular todo by id 
  has been completed, then it return with the checkbox completed. Otherwise, it will return with an open checkbox */
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

 /*NOTE - takes in the id and returns a copy of the array of all the todos with an id that is not equal
 to the id given */
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
