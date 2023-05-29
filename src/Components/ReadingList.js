import React from 'react';
import { useState, useEffect } from 'react';
import NewBookForm from './Reading-Components/NewBookForm';
import ListOfBooks from './Reading-Components/ListOfBooks';
import styles from "../Styles/readingList.module.css";

export default function ReadingList() {
    const BOOKS_API = "https://6441e96533997d3ef904aac0.mockapi.io/CRUD_App_API/books";

    const [books, setBooks] = useState([]);

    function getBooks() {
        fetch(BOOKS_API)
            .then((data) => data.json())
            .then((data) => setBooks(data))
    }

    useEffect(() => {
        getBooks()
    }, [])

  return (
    <div className={styles.readingList}>
        <h1 className={styles.header}>Reading List</h1>
    <NewBookForm 
        booksAPI={BOOKS_API} 
        getBooks={getBooks}
        styles={styles}/>
    <ListOfBooks 
        booksAPI={BOOKS_API}
        books={books}
        getBooks={getBooks}
        styles={styles} />

    </div>
  )
}
