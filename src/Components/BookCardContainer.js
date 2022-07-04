import {React, useState} from "react";
import BookCard from "./BookCard";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, Alert } from "react-bootstrap";

function BookCardContainer({books}) {

    const [show, setShow] = useState(true);

    function AlertDismissible() {
        return (
          <>
            <Alert show={show} variant="success">
              <Alert.Heading>New book added!</Alert.Heading>
              <p>
                Book details
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                  Dismiss
                </Button>
              </div>
            </Alert>
          </>
        );
      }
      
    return (
        <div>
            <Container >
            <AlertDismissible />
                <h1>Books Read</h1>
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