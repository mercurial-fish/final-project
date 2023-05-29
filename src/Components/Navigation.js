import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div>
        <Navbar bg="info" variant="dark">
          <Container>
            <Navbar.Brand href="/">Dezi's Website</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/toDoList">To-Do List</Nav.Link>
              <Nav.Link href="/readingList">Reading List</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}
