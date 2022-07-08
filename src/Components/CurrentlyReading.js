import {React, useState} from "react";
import { Card, CardGroup, ProgressBar } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion'

function CurrentlyReading({bookReading, newPageUpdate}) {

    const {id, title, image, author, pages, pagesRead, read} = bookReading

    const [newPageCount, setNewPageCount] = useState('')

    function handleChange(event) {
        setNewPageCount(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`http://localhost:3000/books/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({pagesRead: parseInt(newPageCount)})
        })
            .then(response => response.json())
            .then(() => newPageUpdate()) // to update state in app dependency array
            .then(() => setNewPageCount('')) // resets form input to blank
    }





    return (
        <CardGroup>
            <Card>
                <Card.Img src={image} alt="card image" />
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Currently Reading</Card.Title>
                    <Card.Text><i>{title}</i> by {author}</Card.Text>
                    <ProgressBar animated now={pagesRead/pages*100} />
                    <Card.Text><small>{pagesRead}/{pages} pages read</small></Card.Text>

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Add new page count</Accordion.Header>
                            <Accordion.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Control name='pages' value={newPageCount} onChange={handleChange} placeholder='enter new page count..'/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Card.Body>
                <Card.Footer>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default CurrentlyReading;