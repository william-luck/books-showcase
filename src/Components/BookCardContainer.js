import React from "react";
import BookCard from "./BookCard";

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BookCardContainer({books}) {
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
            {books.map((book, idx,) => (
                <Col>
                <Card>
                    <BookCard book={book}/>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default BookCardContainer;