import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import ReadingList from './Components/ReadingList';
import { Nav, Navbar, Container } from 'react-bootstrap';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/readingList">Reading List</Link>
            </li>
          </ul>
        </nav>
        

        <Switch>
          <Route path="/readingList">
            <ReadingList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}