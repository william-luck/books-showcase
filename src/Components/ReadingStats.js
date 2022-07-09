import {React, useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import '../App.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'




function ReadingStats({books}) {

    let booksRead = books.filter(book => book.read)
    let bookCurrentlyReading = (books.filter(book => !book.read))[0]
    let pagesRead = booksRead.reduce((previous, current) => previous + current.pages, 0)

    if (!!bookCurrentlyReading) {
        pagesRead+=bookCurrentlyReading.pagesRead
    } // will add pages to page total if there's a book being read


    const booksPopover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Books</Popover.Header>
          <Popover.Body>
            <ul>
                {books.map(book => {
                    return <li>{book.title}: {book.author} {!book.read ? '(not included, currently reading)' : null}</li>
                })}
            </ul>
          </Popover.Body>
        </Popover>
      );

    const pagesPopover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Pages</Popover.Header>
        <Popover.Body>
        <ul>
            {books.map(book => {
                return <li>
                    {book.title}: {
                        book.read ? book.pages : book.pagesRead + ' (in progress)' 
                    }
                    </li>
            })}
        </ul>
        </Popover.Body>
    </Popover>
    );

    const hoursPopover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Hours</Popover.Header>
        <Popover.Body>
        <ul>
            {books.map(book => {
                return <li>{book.title}: {
                    book.read ? Math.trunc(book.pages*1.65/60) : Math.trunc(book.pagesRead*1.65/60)
                    } hours
                    {book.read ? null : ' (in progress)'}</li>
            })}
        </ul>
        </Popover.Body>
    </Popover>
    );

    const fictionBooksPopover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">FictionBooks</Popover.Header>
          <Popover.Body>
            <ul>
                {books.filter(book => book.genre === 'Fiction').map(book => {
                    return <li>{book.title} {!book.read ? ' (currently reading)' : null}</li>
                })
                }
            </ul>
          </Popover.Body>
        </Popover>
      );

    return (
        <>
            <Container>  
                <h1>Reading Stats</h1>          
            <CardGroup>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}}>
                    {booksRead.length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Books read</Card.Text>
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={booksPopover}>
                        <Button variant="success">See list</Button>
                    </OverlayTrigger>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title className="title" align='center' style={{fontSize:"80px"}}>{pagesRead}</Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Pages</Card.Text>
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={pagesPopover}>
                        <Button variant="success">See pages</Button>
                    </OverlayTrigger>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}} >{Math.trunc((pagesRead*1.65)/60)}</Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Hours</Card.Text>
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={hoursPopover}>
                        <Button variant="success">See hours</Button>
                    </OverlayTrigger>
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            </Container>

            <Container>  
                <br></br>      
            <CardGroup>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}}>
                    {booksRead.filter(book => book.genre === 'Fiction').length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Fiction books</Card.Text>
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={fictionBooksPopover}>
                        <Button variant="success">See list</Button>
                    </OverlayTrigger>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title className="title" align='center' style={{fontSize:"80px"}}>
                    {booksRead.filter(book => book.genre === 'Non-fiction').length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Non-fiction books</Card.Text>
                {/* <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={pagesPopover}>
                        <Button variant="success">See pages</Button>
                    </OverlayTrigger>
                </Card.Text> */}
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}}>
                {booksRead.filter(book => book.genre === 'Memoir').length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Memoirs</Card.Text>
                {/* <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={hoursPopover}>
                        <Button variant="success">See hours</Button>
                    </OverlayTrigger>
                </Card.Text> */}
                </Card.Body>
            </Card>
            </CardGroup>
            </Container>

            <Container>  
                <br></br>      
            <CardGroup>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}}>
                    {booksRead.filter(book => book.stars === 5).length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Books with five-star rating</Card.Text>
                {/* <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={booksPopover}>
                        <Button variant="success">See list</Button>
                    </OverlayTrigger>
                </Card.Text> */}
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title className="title" align='center' style={{fontSize:"80px"}}>
                    {booksRead.filter(book => book.stars === 4).length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Books with four-star rating</Card.Text>
                {/* <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={pagesPopover}>
                        <Button variant="success">See pages</Button>
                    </OverlayTrigger>
                </Card.Text> */}
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}}>
                {booksRead.filter(book => book.stars <= 3).length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>"Meh" books</Card.Text>
                {/* <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={hoursPopover}>
                        <Button variant="success">See hours</Button>
                    </OverlayTrigger>
                </Card.Text> */}
                </Card.Body>
            </Card>
            </CardGroup>
            </Container>
        </>
        
    )
}

export default ReadingStats