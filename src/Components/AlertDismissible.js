import { React, useState} from "react";
import { Button, Alert } from "react-bootstrap";



function AlertDismissible({show, setShow}) {
    
    return (
        <>
        <Alert show={show} variant="success">
            <Alert.Heading>New book added!</Alert.Heading>
            <p>
            Book details
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