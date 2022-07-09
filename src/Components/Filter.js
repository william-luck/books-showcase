import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Filter () {
    return (
        <div style={{display:'inline-block'}}>
        <DropdownButton id="dropdown-item-button" title="Filter" >
            <Dropdown.Item as="button" eventKey={'all'}>All</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'title'}>Title</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'author-first'}>Author (first name)</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'author-last'}>Author (last name)</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'genre'}>Genre</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'rating-high-to-low'}>Rating (high to low)</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'rating-low-to-high'}>Rating (low to high)</Dropdown.Item>
        </DropdownButton>

        {/* onSelect={handleSort} */}
        </div>
    )
}

export default Filter

