import { React, useState} from "react";
import { Button, Alert } from "react-bootstrap";



function AlertDismissible({show, setShow, newBookAdded}) {

    return (
        <>
        <Alert show={show} variant="success">
            <Alert.Heading>New book added!</Alert.Heading>
            <p>
            <i>{newBookAdded.title}</i> by {newBookAdded.author} has been added to your library and is now reflected in reading stats. 
            {/* Need a way to store the information of the last book, display title and author in alert, say that the new book has been reflected in the reading stats. */}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
                Dismiss
            </Button>
            </div>
        </Alert>
        </>
    );
    }

    export default AlertDismissible;