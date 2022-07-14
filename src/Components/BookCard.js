import {React, useEffect, useState} from "react";
import { Badge } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import { Rating } from "react-simple-star-rating";
import 'react-rater/lib/react-rater.css'
import { Dropdown, DropdownButton } from "react-bootstrap";



function BookCard({book, ratingToggle, bookReading, newPageUpdate}) {

    const {id, title, image, author, pages, read, stars, genre, wantToRead, pagesRead, currentlyReading, favorite} = book

    const zeroStar = 
    <Rating
    onClick={handleRating}
    ratingValue={0}
    size={20}
    label
    transition
    fillColor='orange'
    emptyColor='gray'
    className='foo' 
    />

    const oneStar = 
    <Rating
    onClick={handleRating}
    ratingValue={20}
    size={20}
    label
    transition
    fillColor='orange'
    emptyColor='gray'
    className='foo' 
    />

    const twoStar = 
    <Rating
    onClick={handleRating}
    ratingValue={40}
    size={20}
    label
    transition
    fillColor='orange'
    emptyColor='gray'
    className='foo' 
    />

    const threeStar = 
    <Rating
    onClick={handleRating}
    ratingValue={60}
    size={20}
    label
    transition
    fillColor='orange'
    emptyColor='gray'
    className='foo' 
    />

    const fourStar = 
    <Rating
    onClick={handleRating}
    ratingValue={80}
    size={20}
    label
    transition
    fillColor='orange'
    emptyColor='gray'
    className='foo' 
    />

    const fiveStar = 
    <Rating
    onClick={handleRating}
    ratingValue={100}
    size={20}
    label
    transition
    fillColor='orange'
    emptyColor='gray'
    className='foo' 
    />

    function handleRating(rating) {

        fetch(`http://localhost:3000/books/${id}`, { // Updates rating in db.json
            method: 'PATCH',
            headers: {
                'Content-Type': "application/json"
            }, 
            body: JSON.stringify({stars: rating/20})
        })
            .then(() => ratingToggle())
    }

    function handleDisplayCurrentlyReading(eventKey) {
        
        if (eventKey === 'display-in-currently-reading') { 
            fetch(`http://localhost:3000/books/${id}`, { // changes property of book that was cliked
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({displayCurrentlyReading: true, currentlyReading: true, wantToRead: false})
            })
                .then(() => newPageUpdate())
            fetch(`http://localhost:3000/books/${bookReading.id}`, { // changes property of book that was previously currentlyReading
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({displayCurrentlyReading: false})
            })
                .then(() => newPageUpdate())
        } else if (eventKey === 'change-to-reading') {
            fetch(`http://localhost:3000/books/${id}`, { // changes to currently reading from want to read
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({currentlyReading: true, wantToRead: false, read: false})
            })
                .then(() => newPageUpdate())
        } else if (eventKey === 'change-to-want-to-read') {
            fetch(`http://localhost:3000/books/${id}`, { // 
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({currentlyReading: false, wantToRead: true, displayCurrentlyReading: false})
            })
                .then(() => newPageUpdate())
        } else if (eventKey === 'add-to-favorites') {
            fetch(`http://localhost:3000/books/${id}`, { // 
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({favorite: true})
            })
                .then(() => newPageUpdate())
        }else if (eventKey === 'remove-from-favorites') {
            fetch(`http://localhost:3000/books/${id}`, { // 
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({favorite: false})
            })
                .then(() => newPageUpdate())
        }
    }

    return (
        <div>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {author}
                </Card.Text>
                <Badge bg='primary'>{genre}</Badge>
                {(stars === 5 ? fiveStar : // Workaround for buggy imported rating system
                    ((stars === 4 ? fourStar : 
                        ((stars === 3 ? threeStar : 
                            ((stars === 2 ? twoStar :
                                ((stars === 1 ? oneStar : zeroStar))
                                ))
                            ))
                        ))
                    )}
                
                
            </Card.Body>
            <Card.Footer>
                {read ? 
                <Badge pill bg='success'>Finished</Badge> :
                    (wantToRead ? <Badge bg="secondary">Want to Read</Badge> : 
                        <Badge pill bg='warning'>Currently Reading</Badge>
                    )
                }
                {currentlyReading || wantToRead ? 
                    <DropdownButton id="dropdown-item-button" title="" size='sm' style={{float: 'right'}} onSelect={handleDisplayCurrentlyReading}>
                    {currentlyReading ? <Dropdown.Item as="button" eventKey={'display-in-currently-reading'}>Display in currently reading</Dropdown.Item> : null}
                    {wantToRead ? <Dropdown.Item as='button' eventKey={'change-to-reading'}>Change to currently reading</Dropdown.Item> : null}
                    {currentlyReading ? <Dropdown.Item as='button' eventKey={'change-to-want-to-read'}>Change to want to read</Dropdown.Item> : null}
                    </DropdownButton>
                    : null}
                    {/* When clicked display in currently reading, I want to make a patch request to set the displayCurrentlyReading of the last book to false, then the current book to true */}
                {read ? 
                    <DropdownButton id="dropdown-item-button" title="" size='sm' style={{float: 'right'}} onSelect={handleDisplayCurrentlyReading}>
                    {!favorite ? 
                        <Dropdown.Item as='button' eventKey={'add-to-favorites'}>Add to favorites</Dropdown.Item> 
                        : <Dropdown.Item as='button' eventKey={'remove-from-favorites'}>Remove from favorites</Dropdown.Item> } 
                    <Dropdown.Item as='button' eventKey={'change-to-reading'}>Change to currently reading</Dropdown.Item>    
                    </DropdownButton>
                : null}

            </Card.Footer>
        </div>
    )
}

export default BookCard;