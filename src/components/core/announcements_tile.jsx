import React from "react"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateBtn from "./update_btn";

const AnnouncementsTile = (props) => {

    const deleteURL = "https://render-server-ep07.onrender.com/deleteAnnouncements";
    // const deleteURL = "http://localhost:5000/deleteAnnouncements";
    const key = props.UniqueID;
    return (
        <>
            <div className="admissions-main-div">
                <Container>
                    <div className="resources-buttons-div">

                        {/* update button */}
                        <UpdateBtn updateAddress="/annoucementsForm" SetDisplay={props.SetDisplay}docKey={key} />

                        {/* delete button */}
                        <button className={"btn btn-outline-dark modify-btn "+props.SetDisplay} type="submit" name="admissions_id" value={key} onClick={
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
                    <Card>
                        <Card.Header as="h5">{props.Title}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {props.Desc1}
                            </Card.Text>

                            <Card.Text>
                                {props.Desc2}
                            </Card.Text>

                            <a href={props.Link1} target="_blank" rel="noreferrer">
                                <Button className="admissions-card-btns" variant="primary">Download pdf</Button>
                            </a>
                        </Card.Body>
                    </Card>


                </Container>

            </div>
        </>
    )
}

export default AnnouncementsTile;