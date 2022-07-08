import React from "react";
import { Dropdown } from "react-bootstrap";

function Sort() {
    return (
        <div style={{display:'inline-block'}
        }>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort by
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Title</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Author</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Genre</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rating (high to low)</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rating (low to high)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}

export default Sort;