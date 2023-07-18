import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Container, Button, Card, Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UpdateBtn from "./update_btn";

const ResourceTile = (props) => {

  const deleteURL = 'https://render-server-ep07.onrender.com/deleteResources'
  // const deleteURL = "http://localhost:5000/deleteResources"
  const json_obj = props.Pos;
  const key = props.Id;
  return (
    <>
      <Container className>
        <div className="resources-ultimate-div">
          <div className="resources-main-div">
            <div className="resources-buttons-div">


              {/* update button */}
              <UpdateBtn updateAddress = "/resourceForm" SetDisplay = {props.SetDisplay} docKey = {key} />

              {/* delete button */}
              <button className={"btn btn-outline-dark modify-btn "+props.SetDisplay} type="submit" name="resources_id" value={key} onClick={
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
              <Accordion defaultActiveKey="0">
                <Accordion.Item>
                  <Accordion.Header><h4>{props.Title}</h4></Accordion.Header>
                  <Accordion.Body>
                    <Card className="card-member">
                      {/* <Card.Header as="h5">{props.Title}</Card.Header> */}
                      <Card.Body>
                        <Row>
                          <Col sm={8}>
                            <div>
                              <Card.Title>{ }</Card.Title>
                              <Card.Text>
                                {props.Desc}
                              </Card.Text>
                            </div>
                          </Col>

                          <Col>
                            <div className="resource-member-img-div">
                              <a href={props.Link} target="_blank" rel="noreferrer">
                                <img
                                  className="resource-member-img"
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"
                                  alt=""
                                  width="50px"
                                />
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

          </div>
        </div>
      </Container>

    </>
  );
};

export default ResourceTile;
