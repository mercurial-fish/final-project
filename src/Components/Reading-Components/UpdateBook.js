import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function UpdateBook({bookID, getBooks, booksAPI}) {

    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedAuthor, setUpdatedAuthor] = useState("");
    const [updatedGenre, setUpdatedGenre] = useState("");

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    function updateBook(bookID) {
        let id = bookID;

        fetch(`${booksAPI}/${id}`, {
            method: "PUT",
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify({
                title: updatedTitle,
                author: updatedAuthor,
                genre: updatedGenre
            })
        }).then(() => getBooks())
        handleClose();
    }

  return (
    <>
    <Button
        variant='success'
        onClick={handleShow}
        >Edit</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    onChange={(e) => setUpdatedTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                        type="text" 
                        onChange={(e) => setUpdatedAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control 
                        type="text" 
                        onChange={(e) => setUpdatedGenre(e.target.value)} />
                </Form.Group>
                <Modal.Footer>
                    <Button
                        variant='secondary'
                        onClick={handleClose}
                        >Close</Button>
                    <Button
                        variant='info'
                        onClick={() => updateBook(bookID)}
                        >Save Changes</Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
    </>
  )
}
