import {React, useState} from "react";
import BookCard from "./BookCard";
import AlertDismissible from "./AlertDismissible";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BookCardContainer({books, show, setShow, newBookAdded}) {
      
    return (
        <div>
            <Container >
            <AlertDismissible show={show} setShow={setShow} newBookAdded={newBookAdded}/>
            <h1>Library</h1>
            <Row xs={1} md={5} className="g-5">
            {books.map((book, idx,) => (
                <Col>
                <Card>
                    <BookCard book={book}/>
                </Card>
                </Col>
            ))}
            </Row>
            </Container>
        </div>
    )
}

export default BookCardContainer;