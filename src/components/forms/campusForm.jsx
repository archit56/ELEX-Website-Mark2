import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const CampusForm = () => {

    const location = useLocation();
    console.log(location.state);
    const urlSubAddress = location.state.whatToDo;
    console.log(urlSubAddress);
    const documentKey = location.state.docKey;
    console.log(documentKey);

     const url = "https://render-server-ep07.onrender.com/" + urlSubAddress + "Campus";
    // const url = "http://localhost:5000/" + urlSubAddress + "Campus";

    const [title, setTitle] = useState("");
    const [para1, setPara1] = useState("");
    const [para2, setPara2] = useState("");
    const [para3, setPara3] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("kjsdhkjhskghks")
        let result = fetch(
            url,
            {
                method: "post",
                body: JSON.stringify({ title, para1, para2, para3, documentKey }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        // result = result.json();
        console.log(result);
        console.log("print this...")
        if (result) {
            alert("Data saved succesfully");
            setTitle("");
            setPara1("")
            setPara2("")
            setPara3("")
        }
    };

    return (
        <>
            <div>
                <Container>
                    <Form className="form-resources">

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>First Paragraph</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Description"
                                value={para1}
                                onChange={(e) => setPara1(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Second Paragraph</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Description"
                                value={para2}
                                onChange={(e) => setPara2(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Third Paragraph</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Description"
                                value={para3}
                                onChange={(e) => setPara3(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleOnSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    );
};

export default CampusForm;
