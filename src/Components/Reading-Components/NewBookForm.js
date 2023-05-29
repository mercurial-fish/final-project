import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function NewBookForm({booksAPI, getBooks, styles}) {

    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newGenre, setNewGenre] = useState("");

/*NOTE - on the event, the books api will be fetched and the new info taken in will create a new object for the array to be added to the API.
It will then set the values back to blank, so the input field will be blank after the form is submitted */

    function addBook(e) {
        e.preventDefault();

        fetch(booksAPI, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(
                {
                    title: newTitle,
                    author: newAuthor,
                    genre: newGenre
                }
            )
        }).then(() => getBooks())
        setNewAuthor("");
        setNewTitle("");
        setNewGenre("");
    }

/*NOTE used react Bootstrap for some basic styling and then used CSS to tidy it up and make it more unique */

  return (
    <div className={styles.bookForm}>
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
                type="text"
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control 
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Control 
                type="text" 
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)} />
        </Form.Group>
        <Button 
            variant='primary' 
            type='submit'
            onClick={(e) => addBook(e)}
            >Create</Button>

    </Form>
    </div>
  )
}
