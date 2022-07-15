import React from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import '../App.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'




function ReadingStats({books}) {

    let booksRead = books.filter(book => book.read)
    let pagesRead = books.reduce((previous, current) => previous + current.pagesRead, 0)

    const popovers = {
        booksRead: 
            <Popover id="popover-basic">
            <Popover.Header as="h3">Books</Popover.Header>
            <Popover.Body>
            <ul>
                {booksRead.map(book => {
                    return <li>{book.title}: {book.author} {!book.read ? '(not included, currently reading)' : null}</li>
                })}
            </ul>
            </Popover.Body>
            </Popover>,
        pagesRead: 
            <Popover id="popover-basic">
            <Popover.Header as="h3">Pages</Popover.Header>
            <Popover.Body>
            <ul>
                {books.filter(book => book.read || book.pagesRead).map(book => {
                    return <li>
                        {book.title}: {
                            book.read ? book.pages : book.pagesRead + ' (in progress)' 
                        }
                        </li>
                })}
            </ul>
            </Popover.Body>
            </Popover>,
        hours:
            <Popover id="popover-basic">
            <Popover.Header as="h3">Hours</Popover.Header>
            <Popover.Body>
            <ul>
                {books.filter(book => book.read || book.pagesRead).map(book => {
                    return <li>{book.title}: {
                        book.read ? Math.trunc(book.pages*1.65/60) : Math.trunc(book.pagesRead*1.65/60)
                        } hours
                        {book.read ? null : ' (in progress)'}</li>
                })}
            </ul>
            </Popover.Body>
            </Popover>,
        fictionBooks: 
            <Popover id="popover-basic">
            <Popover.Header as="h3">Fiction Books</Popover.Header>
            <Popover.Body>
            <ul>
                {booksRead.filter(book => book.genre === 'Fiction').map(book => { // filters to obtain fiction books, then maps each book to overlay
                    return <li>{book.title} {!book.read ? ' (currently reading)' : null}</li>
                })
                }
            </ul>
            </Popover.Body>
            </Popover>,
        nonFictionBooks: 
            <Popover id="popover-basic">
            <Popover.Header as="h3">Non-fiction Books</Popover.Header>
            <Popover.Body>
            <ul>
                {booksRead.filter(book => book.genre === 'Non-fiction').map(book => {
                    return <li>{book.title} {!book.read ? ' (currently reading)' : null}</li>
                })
                }
            </ul>
            </Popover.Body>
            </Popover>,
        memoirs: 
            <Popover id="popover-basic">
            <Popover.Header as="h3">Memoirs</Popover.Header>
            <Popover.Body>
            <ul>
                {booksRead.filter(book => book.genre === 'Memoir').map(book => {
                    return <li>{book.title} {!book.read ? ' (currently reading)' : null}</li>
                })
                }
            </ul>
            </Popover.Body>
            </Popover>,
        fiveStars: 
            <Popover id="popover-basic">
            <Popover.Header as="h3">Five-star Books</Popover.Header>
            <Popover.Body>
            <ul>
                {booksRead.filter(book => book.stars === 5).map(book => {
                    return <li>{book.title} {!book.read ? ' (currently reading)' : null}</li>
                })
                }
            </ul>
            </Popover.Body>
            </Popover>,
        fourStars: 
            <Popover id="popover-basic">
            <Popover.Header as="h3">Four-star Books</Popover.Header>
            <Popover.Body>
            <ul>
                {booksRead.filter(book => book.stars === 4).map(book => {
                    return <li>{book.title} {!book.read ? ' (currently reading)' : null}</li>
                })
                }
            </ul>
            </Popover.Body>
            </Popover>,
        meh: 
            <Popover id="popover-basic">
            <Popover.Header as="h3">Meh</Popover.Header>
            <Popover.Body>
            <ul>
                {booksRead.filter(book => book.stars <= 3).map(book => {
                    return <li>{book.title} {!book.read ? ' (currently reading)' : null}</li>
                })
                }
            </ul>
            </Popover.Body>
            </Popover>
    }

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
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popovers.booksRead}>
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
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popovers.pagesRead}>
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
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popovers.hours}>
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
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popovers.fictionBooks}>
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
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popovers.nonFictionBooks}>
                        <Button variant="success">See list</Button>
                    </OverlayTrigger>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}}>
                {booksRead.filter(book => book.genre === 'Memoir').length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Memoirs</Card.Text>
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popovers.memoirs}>
                        <Button variant="success">See list</Button>
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
                    {booksRead.filter(book => book.stars === 5).length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Books with five-star rating</Card.Text>
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="top" overlay={popovers.fiveStars}>
                        <Button variant="success">See list</Button>
                    </OverlayTrigger>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title className="title" align='center' style={{fontSize:"80px"}}>
                    {booksRead.filter(book => book.stars === 4).length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>Books with four-star rating</Card.Text>
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="top" overlay={popovers.fourStars}>
                        <Button variant="success">See list</Button>
                    </OverlayTrigger>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border='light'>
                <Card.Body>
                <Card.Title align='center' className="title" style={{fontSize:"80px"}}>
                {booksRead.filter(book => book.stars <= 3).length}
                </Card.Title>
                <Card.Text align='center'><small className="text-muted">-</small></Card.Text>
                <Card.Text align='center'>"Meh" books</Card.Text>
                <Card.Text align='center'>
                    <OverlayTrigger trigger="click" placement="top" overlay={popovers.meh}>
                        <Button variant="success">See list</Button>
                    </OverlayTrigger>
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            </Container>
        </>
        
    )
}

export default ReadingStats