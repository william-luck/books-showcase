import React from "react";
import { Card, CardGroup } from "react-bootstrap";

function CurrentlyReading() {
    return (
        <CardGroup>
  <Card>
    <Card.Img src="https://images-na.ssl-images-amazon.com/images/I/91DUhtU6KCL.jpg" alt="card image" />
    {/* <Card.ImgOverlay>
        <Card.Body></Card.Body>
    <Card.ImgOverlay /> */}
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>Currently Reading</Card.Title>
      <Card.Text>
        Blank by blank
      </Card.Text>
      <Card.Text>Progress Bar</Card.Text>
      <Card.Text>Pages, hours</Card.Text>
      <Card.Text>Add new pages read</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    )
}

export default CurrentlyReading;