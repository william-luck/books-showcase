import React from "react";
import BookCard from "./BookCard";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BookCardContainer({books}) {
    return (
        <div>
            <Container >
                <h1>All Books</h1>
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