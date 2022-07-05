import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import BookCardContainer from './BookCardContainer';
import NavBar from './NavBar';
import ReadingStats from './ReadingStats';
import NewBookForm from './NewBookForm';
import FeaturedBooks from './FeaturedBooks';
import CurrentlyReading from './CurrentlyReading';
import { Col, Container, Row } from 'react-bootstrap';

import { Route} from 'react-router-dom';




function App() {

  const [books, setBooks] = useState([])
  const [newBookAdded, setNewBookAdded] = useState([])
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(src => setBooks(src))
  }, [newBookAdded])

  function newBookToggle(newBook) {
    setNewBookAdded(newBook)
    console.log(newBook)
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <Route path="/home">
        <Container>
        <h3>Recommended</h3>
        <Row>
          <Col><FeaturedBooks /></Col>
          <Col><CurrentlyReading /></Col>
        </Row>
        </Container>
        <BookCardContainer books={books} show={show} setShow={setShow} newBookAdded={newBookAdded}/>
      </Route>
      <Route path="/readingstats">
        <ReadingStats books={books} />
      </Route>
      <Route path="/newbookform">
        <NewBookForm newBookToggle={newBookToggle} setShow={setShow}/>
      </Route>
    </div>
  );
}

export default App;
