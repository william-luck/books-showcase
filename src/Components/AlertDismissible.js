import { React, useState} from "react";
import { Button, Alert } from "react-bootstrap";



function AlertDismissible({show, setShow, newBookAdded, bookFinished, bookFinishedInfo}) {

    return (
        <>
        <Alert show={show} variant="success">
            <Alert.Heading>{bookFinished ? `You've finished ${bookFinishedInfo.title}` : 'New book added!'}</Alert.Heading>
            <p>
            {bookFinished ? 'Reading stats updated. Add a new book below to display in currently reading': `${newBookAdded.title} by ${newBookAdded.author} has been added to your library.`}
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