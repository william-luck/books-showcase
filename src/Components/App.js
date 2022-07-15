import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import BookCardContainer from './BookCardContainer';
import NavBar from './NavBar';
import ReadingStats from './ReadingStats';
import NewBookForm from './NewBookForm';
import CurrentlyReading from './CurrentlyReading';
import { Col, Container, Row } from 'react-bootstrap';
import AlertDismissible from './AlertDismissible';

import { Route} from 'react-router-dom';







function App() {

  const [books, setBooks] = useState([])
  const [newBookAdded, setNewBookAdded] = useState([])
  const [pageUpdate, setPageUpdate] = useState(false)
  const [show, setShow] = useState(false);
  const [bookReading, setBookReading] = useState([])
  const [bookFinished, setBookFinsihed] = useState(false)
  const [bookFinishedInfo, setBookFinishedInfo] = useState([])
  const [ratingChange, setRatingChange] = useState(true)
  const [favoriteBooks, setFavoriteBooks] = useState([])




  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(src => {
        setBooks(src)
        setBookReading(src.find(book => book.displayCurrentlyReading)) 
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

    setBookFinsihed(true)
    setBookFinishedInfo({...bookReading})
    setShow(true)

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
      <Route exact path="/">
        <Container>
        <AlertDismissible show={show} setShow={setShow} newBookAdded={newBookAdded} bookFinished={bookFinished} bookFinishedInfo={bookFinishedInfo}/>

        <Row>
          <Col md={12}>
          <CurrentlyReading bookReading={bookReading} newPageUpdate={newPageUpdate} handleMarkAsFinished={handleMarkAsFinished} favoriteBooks={favoriteBooks}/> 
          </Col> 
        </Row>
        </Container>


        <BookCardContainer books={books} ratingToggle={ratingToggle} bookReading={bookReading} newPageUpdate={newPageUpdate}/>
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
