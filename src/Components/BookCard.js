import {React, useEffect, useState} from "react";
import { Badge } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import { Rating } from "react-simple-star-rating";
import 'react-rater/lib/react-rater.css'
import { Dropdown, DropdownButton } from "react-bootstrap";



function BookCard({book, ratingToggle, bookReading, newPageUpdate}) {

    const {id, title, image, author, pages, read, stars, genre, wantToRead, pagesRead, currentlyReading} = book

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
        console.log(eventKey)
        console.log(id)
        
        if (eventKey === 'display-in-currently-reading') { // Changes property of book clicked
        fetch(`http://localhost:3000/books/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({displayCurrentlyReading: true})
        })
        fetch(`http://localhost:3000/books/${bookReading.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({displayCurrentlyReading: false})
        })
            .then(() => newPageUpdate())
        }


        // make patch request using ID of book clicked, update displayCurrentlyReading to true
        // How do I get the ID on the old book? These cards cannot communicate with one another, so I guess I can use the state in the App.js to get the ID of book currently. 
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
                {currentlyReading ? 
                    <DropdownButton id="dropdown-item-button" title="" size='sm' style={{display: "inline-block"}} onSelect={handleDisplayCurrentlyReading}>
                    <Dropdown.Item as="button" eventKey={'display-in-currently-reading'}>Display in currently reading</Dropdown.Item>
                    <Dropdown.Item as="button" eventKey={'mark-as-finished'}>Mark as finished </Dropdown.Item>
                    </DropdownButton>
                    : null}
                    {/* When clicked display in currently reading, I want to make a patch request to set the displayCurrentlyReading of the last book to false, then the current book to true */}

            </Card.Footer>
        </div>
    )
}

export default BookCard;