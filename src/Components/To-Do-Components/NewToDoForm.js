import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function NewToDoForm({ onSubmit, styles }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className={styles.newItemForm}>
      <div className={styles.formRow}>
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <Button variant="success">Add</Button>
    </form>
  )
}
