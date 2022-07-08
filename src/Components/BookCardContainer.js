import {React, useState} from "react";
import BookCard from "./BookCard";
import AlertDismissible from "./AlertDismissible";
import Sort from "./Sort";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BookCardContainer({books, show, setShow, newBookAdded}) {

    const [sort, SetSort] = useState('author')

    const booksToDisplay = [...books]

    if (sort === 'title') {
        booksToDisplay.sort((a, b) => {
            let titleA = a.title.toLowerCase();
            let titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1
            } else {
                return 1
            }
        })
    } else if (sort === 'author') {
        booksToDisplay.sort((a, b) => {
            let authorA = a.author.toLowerCase().split(' ')
            authorA = authorA[authorA.length - 1]
            let authorB = b.author.toLowerCase().split(' ')
            authorB = authorB[authorB.length - 1]
            if (authorA < authorB) {
                return -1
            } else {
                return 1
            }
        })
    }
    
    
    
    




      
    return (
        <div>
            <Container >
            <AlertDismissible show={show} setShow={setShow} newBookAdded={newBookAdded}/>
            <div>
            <h1 style={{display:'inline-block', width:'150px'}}>Library</h1><Sort />
            </div>
            <Row xs={1} md={5} className="g-5">
            {booksToDisplay.map((book, idx,) => (
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