import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from "react-bootstrap";

const ResearchTop = () => {

    return (
        <>
            <Container className="">
                <Card style={{}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <Card.Body>
                        <Card.Title><h1>Disciplines</h1></Card.Title>
                        <Card.Text>
                        Research at School of Electronics focusses on the following major disciplines of engineering and sciences:
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Embedded Systems</ListGroup.Item>
                        <ListGroup.Item>Mobile Computing Technology</ListGroup.Item>
                        <ListGroup.Item>VLSI</ListGroup.Item>
                        <ListGroup.Item>Optoelectronics</ListGroup.Item>
                        <ListGroup.Item>Signal Processing</ListGroup.Item>
                        <ListGroup.Item>Wireless Network</ListGroup.Item>
                        <ListGroup.Item>Geographic Information System</ListGroup.Item>
                        <ListGroup.Item>Remote Sensing</ListGroup.Item>
                    </ListGroup>
                    {/* <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                </Card>
            </Container>
        </>
    )
}

export default ResearchTop;