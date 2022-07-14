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
import { Card } from 'react-bootstrap';

import { Route} from 'react-router-dom';







function App() {

  const [books, setBooks] = useState([])
  const [newBookAdded, setNewBookAdded] = useState([])
  const [pageUpdate, setPageUpdate] = useState(false)
  const [show, setShow] = useState(false);
  const [bookReading, setBookReading] = useState([])
  const [ratingChange, setRatingChange] = useState(true)
  const [favoriteBooks, setFavoriteBooks] = useState([])



  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(src => {
        setBooks(src)
        setBookReading(src.find(book => book.displayCurrentlyReading)) // Returns first book in src where read is false (as in currently reading)
        setFavoriteBooks(src.filter(book => book.favorite))
      })
  }, [newBookAdded, pageUpdate, ratingChange]) 


  function newBookToggle(newBook) {
    setNewBookAdded(newBook)
    console.log(newBook)
  }

  function newPageUpdate() {
    setPageUpdate(!pageUpdate)
  }

  function ratingToggle() {
    setRatingChange(!ratingChange)
  }

  function handleMarkAsFinished() {
    console.log(bookReading)

    fetch(`http://localhost:3000/books/${bookReading.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        read: true,
        pagesRead: bookReading.pages,
        currentlyReading: false,
        displayCurrentlyReading: false
      })
    })
      .then(() => newPageUpdate())
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <Route path="/home">

        <Container>
        {/* <h3>Recommended</h3> */}
        <Row>
          {/* <Col md={12}> {bookReading ? <CurrentlyReading bookReading={bookReading} newPageUpdate={newPageUpdate} handleMarkAsFinished={handleMarkAsFinished} favoriteBooks={favoriteBooks}/> 
          : <Card>
            <Card.Body><Card.Text>No books currently reading. Add a book to track</Card.Text></Card.Body>
            </Card>}
          </Col>  */}

          <Col md={12}>
          <CurrentlyReading bookReading={bookReading} newPageUpdate={newPageUpdate} handleMarkAsFinished={handleMarkAsFinished} favoriteBooks={favoriteBooks}/> 
          </Col> 
        



        </Row>
        </Container>


        <BookCardContainer books={books} show={show} setShow={setShow} newBookAdded={newBookAdded} ratingToggle={ratingToggle} bookReading={bookReading} newPageUpdate={newPageUpdate}/>
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
