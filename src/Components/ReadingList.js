//NOTE - Imports functions, css, and Bootstrap

import React from 'react';
import { useState, useEffect } from 'react';
import NewBookForm from './Reading-Components/NewBookForm';
import ListOfBooks from './Reading-Components/ListOfBooks';
import styles from "../Styles/readingList.module.css";

export default function ReadingList() {
    const BOOKS_API = "https://6441e96533997d3ef904aac0.mockapi.io/CRUD_App_API/books";

    const [books, setBooks] = useState([]);

 //NOTE - fetches data from API to be used to create the booklist

    function getBooks() {
        fetch(BOOKS_API)
            .then((data) => data.json())
            .then((data) => setBooks(data))
    }

    useEffect(() => {
        getBooks()
    }, [])

/*NOTE - Instead of using one CSS file for the whole app, I created a stylesheet for each page. So the styles are passed as props
to the smaller components. Also, the booksAPI and getBooks are passed as props, so they can be used to make functions in the other
components. List of Books has the books array as a prop, since it will need to print out the book info given.
*/

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
