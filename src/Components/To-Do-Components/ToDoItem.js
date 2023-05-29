import React from 'react'
import { Button } from 'react-bootstrap'

export default function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
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
    <Button 
      variant='danger'
      onClick={() => deleteTodo(id)}>
      Delete
    </Button>
  </li>
  )
}
