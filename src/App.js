import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Movies from './Components/Movies';
import ToDoList from './Components/ToDoList';
import Home from './Components/Home';
import ReadingList from './Components/ReadingList';
import { Nav, Navbar, Container } from 'react-bootstrap';


export default function App() {
  return (
    <Router>
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

        <Switch>
          <Route path="/readingList">
            <ReadingList />
          </Route>
          <Route path="/toDoList">
            <ToDoList />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}
