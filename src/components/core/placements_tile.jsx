import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Container, Button, Card, Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UpdateBtn from "./update_btn";

const PlacementsTile = (props) => {

    const deleteURL = "https://render-server-ep07.onrender.com/deletePlacements";
    // const deleteURL = "http://localhost:5000/deletePlacements";

    const json_obj = props.Pos;
    const key = props.Id;
    return (
        <>
            <Container className>
                <div className="resources-ultimate-div">
                    <div className="resources-main-div">
                        <div className="resources-buttons-div">


                            {/* update button */}
                            <UpdateBtn updateAddress="/placementsForm" SetDisplay={props.SetDisplay} docKey={key} />

                            {/* delete button */}
                            <button className={"btn btn-outline-dark modify-btn "+ props.SetDisplay} type="submit" name="resources_id" value={key} onClick={
                                async (e) => {
                                    e.preventDefault();
                                    alert("Data deleted successfully")
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
                            }>Delete</button>

                        </div>
                        <div>
                            <Card>
                                <Card.Header as="h5">{props.Title}</Card.Header>
                                <Card.Body>
                                    {/* <Card.Title>Special title treatment</Card.Title> */}
                                    <Card.Text>
                                        {props.Desc}
                                    </Card.Text>
                                    <a href={props.Link} target="_blank" rel="noreferrer">
                                    <Button variant="primary">Download PDF</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    );
};

export default PlacementsTile;
