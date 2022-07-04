import {React, useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

function NewBookForm() {

    const [email, setEmail] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [image, setImage] = useState('')

    function handleTitleChange(event) {
        setEmail(event.target.value)
    }

    function handleAuthorChange(event) {
        setAuthor(event.target.value)
    }

    function handlePageChange(event) {
        setPages(event.target.value)
    }

    function handleImageChange(event) {
        setImage(event.target.value)
    }


    return (
        <Container>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Book title</Form.Label>
                <Form.Control placeholder="Enter book title" onChange={handleTitleChange} value={email}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control placeholder="Enter author name" onChange={handleAuthorChange} value={author} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Pages</Form.Label>
                <Form.Control placeholder="Enter number of pages" onChange={handlePageChange} value={pages} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cover image</Form.Label>
                <Form.Control placeholder="Enter an image url for the book cover" onChange={handleImageChange} value={image}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default NewBookForm