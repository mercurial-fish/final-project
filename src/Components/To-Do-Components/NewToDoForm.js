import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function NewToDoForm({ addTodo, styles }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    addTodo(newItem)

    setNewItem("")
  }

  return (
    <form className={styles.newItemForm}>
      <div className={styles.formRow}>
        <label htmlFor="item">New Task</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button
        className={styles.btn}
        onClick={handleSubmit}>Add</button>
    </form>
  )
}
