import React, { useState } from 'react'


export default function NewToDoForm({ addTodo, styles }) {
  const [newItem, setNewItem] = useState("")

  /*NOTE - takes in the event and if the new item is empty then it returns empty. Otherwise the new item
  will run in the addTodo function which is detailed on the ToDoList component. Then it sets the new item
  back to an empty string  */
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
