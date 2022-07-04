import React from "react";

import Card from 'react-bootstrap/Card'

function BookCard({book}) {

    const {title, image, author, pages} = book

    return (
        <div>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {author}
                </Card.Text>
            </Card.Body>
        </div>
    )
}

export default BookCard;