import {React, useState} from "react";
import BookCard from "./BookCard";
import Sort from "./Sort";
import Search from "./Search";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from "./Filter";

function BookCardContainer({books, ratingToggle, bookReading, newPageUpdate}) {

    const [sort, SetSort] = useState('all')
    const [searchedTerm, setSearchedTerm] = useState('') 
    
    let booksToDisplay = [...books]

    function handleSort(sorted) {
        SetSort(sorted)
        
    }

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
    } else if (sort === 'author-first') {
        booksToDisplay.sort((a, b) => {
            let authorA = a.author.toLowerCase();
            let authorB = b.author.toLowerCase();
            if (authorA < authorB) {
                return -1
            } else {
                return 1
            }
        })
    } else if (sort === 'genre') { 
        booksToDisplay.sort((a, b) => {
            let genreA = a.genre.toLowerCase();
            let genreB = b.genre.toLowerCase();
            if (genreA < genreB) {
                return -1
            } else {
                return 1
            }
        })
    } else if (sort === 'rating-high-to-low') {
        booksToDisplay.sort((a, b) => {
            return b.stars - a.stars
        })
        console.log(booksToDisplay)
    } else if (sort === 'rating-low-to-high') {
        booksToDisplay.sort((a, b) => {
            return a.stars - b.stars
        })
    } else if (sort === 'fiction') {
        booksToDisplay = books.filter(book => book.genre === 'Fiction')
    } else if (sort === 'non-fiction') {
        booksToDisplay = books.filter(book => book.genre === 'Non-fiction')
    } else if (sort === 'memoir') {
        booksToDisplay = books.filter(book => book.genre === 'Memoir')
    } else if (sort === 'rating-one-star') {
        booksToDisplay = books.filter(book => book.stars === 1)
    } else if (sort === 'rating-two-star') {
        booksToDisplay = books.filter(book => book.stars === 2)
    } else if (sort === 'rating-three-star') {
        booksToDisplay = books.filter(book => book.stars === 3)
    } else if (sort === 'rating-four-star') {
        booksToDisplay = books.filter(book => book.stars === 4)
    } else if (sort === 'rating-five-star') {
        booksToDisplay = books.filter(book => book.stars === 5)
    } else if (sort === 'finished') {
        booksToDisplay = books.filter(book => book.read)
    } else if (sort === 'currently-reading') {
        booksToDisplay = books.filter(book => book.currentlyReading)
    } else if (sort === 'want-to-read') {
        booksToDisplay = books.filter(book => book.wantToRead)
    } else if (sort === 'all') { // will display all books by default
        booksToDisplay = [...books]
    } else { // for searched terms
        booksToDisplay = books.filter(book => book.title.includes(sort) || book.author.includes(sort))
    }

    return (
        <div>
            <Container >
            <div>
            <h1 style={{display:'inline-block', width:'150px'}}>Library</h1><Sort handleSort={handleSort} /> <Filter handleFilter={handleSort} />
            <Search searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} handleSort={handleSort}/>
            {booksToDisplay.length === 0 ? <p>No books match criteria </p> : null }
            </div>
            <Row xs={1} md={5} className="g-5">
            {booksToDisplay.map(book => (
                <Col>
                <Card>
                    <BookCard key={book.id} book={book} ratingToggle={ratingToggle} bookReading={bookReading} newPageUpdate={newPageUpdate}/>
                </Card>
                </Col>
            ))}
            </Row>
            </Container>

            
        </div>
    )
}

export default BookCardContainer;