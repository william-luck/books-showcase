import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import BookCardContainer from './BookCardContainer';
import NavBar from './NavBar';
import ReadingStats from './ReadingStats';
import NewBookForm from './NewBookForm';

import { BrowserRouter, Route} from 'react-router-dom';




function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(src => setBooks(src))
  }, [])

  function Home() {
    return <BookCardContainer books={books}/>
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/readingstats">
        <ReadingStats />
      </Route>
      <Route path="/newbookform">
        <NewBookForm />
      </Route>
    </div>
  );
}

export default App;
