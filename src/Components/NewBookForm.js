import {React, useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

function NewBookForm() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [image, setImage] = useState('')

    function handleTitleChange(event) {
        setTitle(event.target.value)
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

    function handleSubmit(event) {
        event.preventDefault();

        const newBook = {
            title: title,
            image: image,
            author: author, 
            pages: parseInt(pages)
        }

        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newBook)
        })
            .then(response => response.json())
            .then(newItem => console.log(newItem))
        

    }


    return (
        <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Book title</Form.Label>
                <Form.Control placeholder="Enter book title" onChange={handleTitleChange} value={title}/>
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