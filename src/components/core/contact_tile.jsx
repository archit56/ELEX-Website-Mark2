
import React from "react"
import { Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateBtn from "./update_btn";
import { Col } from "react-bootstrap"

const ContactTile = (props) => {

    // const deleteURL = "http://localhost:5000/deleteContacts";
    const key = props.UniqueID;
    return (
        <>
            <div className="admissions-main-div">
                <Container>
                    <div className="resources-buttons-div">

                        {/* update button */}
                        <UpdateBtn updateAddress="/contactInfoForm" SetDisplay={props.SetDisplay} docKey={key} />

                        {/* delete button */}
                        {/* <button className="btn btn-primary modify-btn" type="submit" name="admissions_id" value={key} onClick={
                            async (e) => {
                                e.preventDefault();
                                let result = await fetch(
                                    deleteURL, {
                                    method: "post",
                                    body: JSON.stringify({ key }),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                                result = await result.json();
                                console.warn(result);
                                if (result) {
                                    alert("Data saved succesfully");
                                }
                            }
                        }>Delete</button> */}
                    </div>
                    <Card>
                        <Card.Header as="h5">Contact Information</Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Card.Title>Mobile no.:</Card.Title>
                                        <Card.Text>{props.Mobile1}</Card.Text>
                                        <Card.Text>{props.Mobile2}</Card.Text>
                                    </Col>
                                    <Col>
                                        <Card.Title>Emails:</Card.Title>
                                        <Card.Text>{props.Email1}</Card.Text>
                                        <Card.Text>{props.Email2}</Card.Text>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    )
}

export default ContactTile;