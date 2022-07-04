import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import BookCardContainer from './BookCardContainer';
import NavBar from './NavBar';




function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(src => setBooks(src))
  }, [])

  return (
    <div>
      <NavBar />
      <BookCardContainer books={books}/>
    </div>
  );
}

export default App;
