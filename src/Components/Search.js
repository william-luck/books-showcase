import React from "react";

import Form from 'react-bootstrap/Form';

function Search({ searchedTerm, setSearchedTerm, handleSort }) {

    function handleSearch (event) {
        setSearchedTerm(event.target.value)
        handleSort(event.target.value);
    }

    return (
        <div style={{display:'inline-block'}}>
            <Form >
            <Form.Group className="mb-3">
                <Form.Control placeholder="Search by author or title" value={searchedTerm} onChange={handleSearch}/>
            </Form.Group>
        </Form>
        </div>
    )
}

export default Search