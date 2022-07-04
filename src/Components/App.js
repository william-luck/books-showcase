import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import BookCardContainer from './BookCardContainer';
import NavBar from './NavBar';
import ReadingStats from './ReadingStats';
import NewBookForm from './NewBookForm';

import { Route} from 'react-router-dom';




function App() {

  const [books, setBooks] = useState([])
  const [newBookAdded, setNewBookAdded] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(src => setBooks(src))
  }, [newBookAdded])

  function newBookToggle() {
    setNewBookAdded(!newBookAdded)
  }





  return (
    <div>
      <NavBar />
      <br></br>
      <Route path="/home">
        <BookCardContainer books={books} />
      </Route>
      <Route path="/readingstats">
        <ReadingStats books={books} />
      </Route>
      <Route path="/newbookform">
        <NewBookForm newBookToggle={newBookToggle}/>
      </Route>
    </div>
  );
}

export default App;
