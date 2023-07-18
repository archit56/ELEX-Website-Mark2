import React from "react";
import { Container } from "react-bootstrap";

const GoogleMaps = () => {
    return (
        <>
            <div className="google-map-div">
                <Container className="google-map-container">

                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.051255808727!2d75.87154947498013!3d22.689135779408947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce8649927d7%3A0xc06c544993d0fbf5!2sELEX%20-%20School%20of%20Electronics%2C%20DAVV!5e0!3m2!1sen!2sin!4v1685351944672!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </Container>
            </div>
        </>
    )
}

export default GoogleMaps;