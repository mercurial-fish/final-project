import React from 'react';
import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';

export default function NewBookForm({booksAPI, getBooks}) {

    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newGenre, setNewGenre] = useState("");

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
    }

  return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
                type="text" 
                onChange={(e) => setNewTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control 
                type="text" 
                onChange={(e) => setNewAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Control 
                type="text" 
                onChange={(e) => setNewGenre(e.target.value)} />
        </Form.Group>
        <Button 
            variant='primary' 
            type='submit'
            onClick={(e) => addBook(e)}
            >Create</Button>

    </Form>
  )
}
