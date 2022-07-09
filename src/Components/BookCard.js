import {React, useEffect, useState} from "react";
import { Badge } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import { Rating } from "react-simple-star-rating";
import 'react-rater/lib/react-rater.css'



function BookCard({book, ratingToggle}) {

    const {id, title, image, author, pages, read, stars, genre} = book

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
                            ((stars === 2 ? twoStar : oneStar
                                ))
                            ))
                        ))
                    )}
                
                
            </Card.Body>
            <Card.Footer>
                {read ? 
                <Badge pill bg='success'>Finished</Badge> :
                <Badge pill bg='warning'>Currently Reading</Badge>}
            </Card.Footer>
        </div>
    )
}

export default BookCard;