import {React, useState} from "react";
import BookCard from "./BookCard";
import AlertDismissible from "./AlertDismissible";
import Sort from "./Sort";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BookCardContainer({books, show, setShow, newBookAdded}) {

    const [sort, SetSort] = useState('genre')

    const booksToDisplay = [...books]

    if (sort === 'title') {
        booksToDisplay.sort((a, b) => { // cr
            let titleA = a.title.toLowerCase();
            let titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1
            } else {
                return 1
            }
        })
    } else if (sort === 'author-last') {
        booksToDisplay.sort((a, b) => {
            let authorA = a.author.toLowerCase().split(' ') // Returns an array of each of the author's names
            authorA = authorA[authorA.length - 1] // retrives the last name (the last element in the array)
            let authorB = b.author.toLowerCase().split(' ')
            authorB = authorB[authorB.length - 1]
            if (authorA < authorB) {
                return -1
            } else {
                return 1
            }
        })
    } else if (sort === 'author-first') { // can refactor
        booksToDisplay.sort((a, b) => {
            let authorA = a.author.toLowerCase();
            let authorB = b.author.toLowerCase();
            if (authorA < authorB) {
                return -1
            } else {
                return 1
            }
        })
    } else if (sort === 'genre') { // cr
        booksToDisplay.sort((a, b) => {
            let genreA = a.genre.toLowerCase();
            let genreB = b.genre.toLowerCase();
            if (genreA < genreB) {
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