import React from "react";
import GoogleMaps from "../core/google_maps";
import ContactUsForm from "../forms/contactUsForm";
import ContactMain from "../core/contactMain";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Contact = () => {


    return (
        <>
            {/* Contact info */}
            <ContactMain />

            {/* Address */}
            <Container>
                <Card>
                    <Card.Header as="h5">Address</Card.Header>
                    <Card.Body>
                        <Card.Title>School of Electronics,
                            Devi Ahilya University
                            Takshashila Campus,Khandwa Road, Indore - 452001(M.P.)
                            India</Card.Title>
                    </Card.Body>
                </Card>
            </Container>

            {/* Map and address */}
            <GoogleMaps />

            {/* Querry form */}
            <ContactUsForm />
        </>
    )
}

export default Contact;