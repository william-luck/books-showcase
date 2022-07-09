import React from "react";

import Form from 'react-bootstrap/Form';

function Search() {

    return (
        <div style={{display:'inline-block'}}>
            <Form >
            <Form.Group className="mb-3">
                <Form.Control placeholder="Search" name='title'/>
            </Form.Group>
        </Form>
        </div>
    )
}

export default Search