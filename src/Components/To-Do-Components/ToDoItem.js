import React from 'react'

export default function ToDoItem({ completed, id, title, toggleTodo, deleteTodo, styles }) {

  /*NOTE - returns a list component with a checkbox, title, and a button. If the checkbox is checked, completed is true,
  and the toggleTodo function will be set in motion. The delete button will take in the id of the todo it's attached to
  and run it through the deleteTodo function when clicked */
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
