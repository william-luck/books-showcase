import {React, useState} from "react";
import { useHistory } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";


function NewBookForm({newBookToggle, setShow}) {

    const history = useHistory();

    const [formData, setFormData] = useState({
        title: '',
        author: '', 
        pages: '',
        image: '',
        pagesRead: ''
    })

    const [currentlyReading, setCurrentlyReading] = useState(false)

    function handleChange(event) {

        if ((event.target.name === 'pages') || (event.target.name ==='stars') || (event.target.name === 'pagesRead')) { // Handle integer submissions
            setFormData({
                ...formData,
                [event.target.name]: parseInt(event.target.value)
        })} else if (event.target.name === 'status') {
            if (event.target.value === "Want to read") {
                setFormData({
                    ...formData,
                    read: false,
                    pagesRead: 0,
                    currentlyReading: false,
                    displayCurrentlyReading: false, 
                    wantToRead: true,
                    favorite: false
                })
            } else if (event.target.value === 'Currently Reading') {
                setFormData({
                    ...formData,
                    read: false,
                    currentlyReading: true,
                    displayCurrentlyReading: true, 
                    wantToRead: false,
                    favorite: false
                })
                setCurrentlyReading(true)
            } else if (event.target.value === "Finished") {
                setFormData({
                    ...formData,
                    read: true,
                    pagesRead: formData.pages,
                    currentlyReading: false,
                    displayCurrentlyReading: false, 
                    wantToRead: false,
                    favorite: false
                })
            }
        } else {
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
            .then(newItem => newBookToggle(newItem)) // will trigger useEffect on App again, to get new book rendered to the page on programmatic navigation
            .then(() => setShow(true))
            .then(history.push('/'))


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

            <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Select onChange={handleChange} value={formData.genre} name="genre">
                    <option>Select..</option>
                    <option>Fiction</option>
                    <option>Non-fiction</option>
                    <option>Memoir</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Select onChange={handleChange} value={formData.stars} name="stars">
                    <option>Select..</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Book Status</Form.Label>
                <Form.Select onChange={handleChange} name="status">
                    <option>Select..</option>
                    <option>Want to read</option>
                    <option>Currently Reading</option>
                    <option>Finished</option>
                </Form.Select>
            </Form.Group>

            {currentlyReading ? (
                <Form.Group className="mb-3">
                <Form.Label>Pages Read</Form.Label>
                <Form.Control placeholder="Enter page count" onChange={handleChange} value={formData.pagesRead} name='pagesRead'/>
                </Form.Group>
            ) : null }

            <Button variant="primary" type="submit">
                Submit
            </Button>

            
        </Form>
        </Container>
    )
}

export default NewBookForm