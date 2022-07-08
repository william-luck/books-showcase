import {React, useState} from "react";
import Carousel from 'react-bootstrap/Carousel'

function FeaturedBooks() {

    return(
        <>
        <Carousel fade style={{maxWidth: '250px'}}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/41YBGxS-tCL.jpg"
                alt="First slide"
                style={{maxHeight:'400px', maxWidth:"250px"}}
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images-na.ssl-images-amazon.com/images/I/81L+4dh4nEL.jpg"
                alt="Second slide"
                style={{maxHeight:'400px', maxWidth:"250px"}}
                />
                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images-na.ssl-images-amazon.com/images/I/81tCtHFtOgL.jpg"
                alt="Third slide"
                style={{maxHeight:'400px', maxWidth:"250px"}}
                />

                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default FeaturedBooks;