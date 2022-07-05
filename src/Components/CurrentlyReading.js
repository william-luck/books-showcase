import React from "react";
import { Card, CardGroup } from "react-bootstrap";

function CurrentlyReading({bookReading}) {

    const {title, image, author, pages, read} = bookReading


    return (
        <CardGroup>
            <Card>
                <Card.Img src={image} alt="card image" />
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Currently Reading</Card.Title>
                <Card.Text>
                    <i>{title}</i> by {author}
                </Card.Text>
                {/* <Card.Text>Progress Bar</Card.Text>
                <Card.Text>Pages, hours</Card.Text>
                <Card.Text>Add new pages read</Card.Text> */}
                </Card.Body>
                <Card.Footer>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default CurrentlyReading;