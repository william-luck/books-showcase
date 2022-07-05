import React from "react";
import { Badge } from "react-bootstrap";

import Card from 'react-bootstrap/Card'

function BookCard({book}) {

    const {title, image, author, pages, read} = book

    return (
        <div>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {author}
                </Card.Text>
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