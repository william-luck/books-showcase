import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {

  useEffect(() => {
    fetch('http://localhost:3000/toys')
      .then(response => response.json())
      .then(src => console.log(src))
  }, [])

  return (
    <div>
      <p>test</p>

<Row xs={1} md={4} className="g-4">
  {Array.from({ length: 9 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://cdn.flickeringmyth.com/wp-content/uploads/2018/04/Kenneth-Branagh-Murder-on-the-Orient-Express-trailer-screenshot.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    

    </div>
  );
}

export default App;
