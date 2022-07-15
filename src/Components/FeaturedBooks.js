import React from "react";
import Carousel from 'react-bootstrap/Carousel'

function FeaturedBooks({ favoriteBooks }) {

    return(
        <>
        <Carousel fade style={{maxHeight: '480px'}}>
            {favoriteBooks.map(book => {
                return (
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={book.image}
                        alt="slide item"
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
        </>
    )
}

export default FeaturedBooks;