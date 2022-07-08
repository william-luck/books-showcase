import {React, useState} from "react";
import { Badge } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import { Rating } from "react-simple-star-rating";

function BookCard({book}) {

    const {id, title, image, author, pages, read, rating} = book
    const [starRating, setStarRating] = useState(rating*20) // Works in factor of 20


    function handleRating(rate) {
        setStarRating(rate)
        console.log(rate)

        fetch(`http://localhost:3000/books/${id}`, { // Updates rating in db.json
            method: 'PATCH',
            headers: {
                'Content-Type': "application/json"
            }, 
            body: JSON.stringify({rating: rate/20})
        })
    }

    return (
        <div>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {author}
                </Card.Text>
                <Rating
                    onClick={handleRating}
                    ratingValue={starRating}
                    size={20}
                    label
                    transition
                    fillColor='orange'
                    emptyColor='gray'
                    className='foo' 
                />
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