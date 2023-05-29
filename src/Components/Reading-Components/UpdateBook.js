import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function UpdateBook({bookID, getBooks, booksAPI}) {

    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedAuthor, setUpdatedAuthor] = useState("");
    const [updatedGenre, setUpdatedGenre] = useState("");

    /*NOTE set a state for show to handle the opening and closing of the modal and it is a boolean.
    Please reference the following url for more info https://react-bootstrap.github.io/components/modal/ */

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    /*NOTE fetches a specific object from the API by targeting the id and uses the PUT method to update it. It will take in the
    values from the form below. When the array is updated, it will retrieve the new array and trigger the handleClose function
    that will close the modal*/

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

    /*NOTE The update form is attached to each instance of a book object being rendered. The form is in a modal that is linked to a button named "Edit". 
    The user will then have the option to close out of the form or update the book, which will then close out the form upon submission */

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
