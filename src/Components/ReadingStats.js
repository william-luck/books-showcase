import React from "react";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import '../App.css';


function ReadingStats({books}) {

    let pagesRead = books.reduce((previous, current) => previous + current.pages, 0)

    return (
        <>
            <Container>  
                <h1>Reading Stats</h1>          
            <CardGroup>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}}>{books.length}</Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Books</Card.Text>
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title className="title" align='center' style={{fontSize:"80px"}}>{pagesRead}</Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Pages</Card.Text>
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}} >101</Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Hours</Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            
            </Container>
        </>
        
    )
}

export default ReadingStats