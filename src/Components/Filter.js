import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Filter ({handleFilter}) {


    return (
        <div style={{display:'inline-block'}}>
        <DropdownButton id="dropdown-item-button" title="Filter" onSelect={handleFilter}>
            <Dropdown.Item as="button" eventKey={'all'}>All</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'fiction'}>Fiction</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'non-fiction'}>Non-fiction</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'memoir'}>Memoir</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'rating-one-star'}>Rating: one star</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'rating-two-star'}>Rating: two stars</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'rating-three-star'}>Rating: three stars</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'rating-four-star'}>Rating: four stars</Dropdown.Item>
            <Dropdown.Item as="button" eventKey={'rating-five-star'}>Rating: five stars</Dropdown.Item>
        </DropdownButton>
        </div>
    )
}

export default Filter

