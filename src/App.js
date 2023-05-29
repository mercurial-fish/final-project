import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Movies from './Components/Movies';
import ToDoList from './Components/ToDoList';
import Home from './Components/Home';
import ReadingList from './Components/ReadingList';
import Navigation from './Components/Navigation';


export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
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
