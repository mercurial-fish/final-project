import React from 'react'
import { Button } from 'react-bootstrap'

export default function ToDoItem({ completed, id, title, toggleTodo, deleteTodo, styles }) {
  return (
    <li>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>
    <button 
      className={styles.deleteBtn}
      onClick={() => deleteTodo(id)}>
      Delete
    </button>
  </li>
  )
}
