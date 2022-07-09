import React from "react";

import Form from 'react-bootstrap/Form';

function Search({ searchedTerm, setSearchedTerm }) {

    function handleSearch (event) {
        console.log(event.target.value)
        setSearchedTerm(event.target.value)
    }

    return (
        <div style={{display:'inline-block'}}>
            <Form >
            <Form.Group className="mb-3">
                <Form.Control placeholder="Search" name='title' value={searchedTerm} onChange={handleSearch}/>
            </Form.Group>
        </Form>
        </div>
    )
}

export default Search