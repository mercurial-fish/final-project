import React from 'react'
import { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import UpdateBook from './UpdateBook'

export default function ListOfBooks({books, booksAPI, getBooks}) {

    function deleteBook(id) {

        fetch(`${booksAPI}/${id}`, {
            method: "DELETE"
        }).then(() => getBooks())
    }

  return (
    <Table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book, index) => (
                <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td><Button variant='danger' onClick={() => deleteBook(book.id)}>Delete</Button></td>
                    <td>
                        <UpdateBook 
                            bookID={book.id}
                            getBooks={getBooks}
                            booksAPI={booksAPI} />
                        </td>        
                </tr>
            ))}
        </tbody>
    </Table>
  )
}
