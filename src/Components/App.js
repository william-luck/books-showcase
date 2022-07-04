import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import BookCardContainer from './BookCardContainer';




function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(src => setBooks(src))
  }, [])

  return (
    <div>
      <p>test</p>
      <BookCardContainer books={books}/>
    </div>
  );
}

export default App;
