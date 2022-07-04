import {React, useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

function NewBookForm() {

    const [formData, setFormData] = useState({
        title: '',
        author: '', 
        pages: '',
        image: ''
    })

    function handleChange(event) {
        if (event.target.name === 'pages') {
            setFormData({
                ...formData,
                [event.target.name]: parseInt(event.target.value)
        })} else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(newItem => console.log(newItem))
    }


    return (
        <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Book title</Form.Label>
                <Form.Control placeholder="Enter book title" onChange={handleChange} value={formData.title} name='title'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control placeholder="Enter author name" onChange={handleChange} value={formData.author} name='author'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Pages</Form.Label>
                <Form.Control placeholder="Enter number of pages" onChange={handleChange} value={formData.pages} name='pages'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cover image</Form.Label>
                <Form.Control placeholder="Enter an image url for the book cover" onChange={handleChange} value={formData.image} name='image'/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default NewBookForm