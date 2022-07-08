import {React, useState} from "react";
import { Badge } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import { Rating } from "react-simple-star-rating";

function BookCard({book}) {

    const {title, image, author, pages, read} = book
    const [rating, setRating] = useState(0) // initial rating value

    function handleRating(rate) {
        setRating(rate)
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
                    ratingValue={rating}
                    size={20}
                    label
                    transition
                    fillColor='orange'
                    emptyColor='gray'
                    className='foo' // Will remove the inline style if applied
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