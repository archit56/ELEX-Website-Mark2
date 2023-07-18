import React from "react";
import Card from 'react-bootstrap/Card';
import { Button, Container } from "react-bootstrap";
import { CardGroup, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom"

const HomePageBanner = () => {
    return (
        <>
            <div className="banner-topmost">
                <Container className="home-page-banner-topmost">
                    <CardGroup>

                        <Card className="banner-card">
                            <div>
                                <i className="fa-solid fa-bullhorn fa-2xl banner-icon"></i>
                            </div>
                            <Card.Body>
                                <NavLink to="/announcements">
                                    <Button variant="light">
                                        Announcements</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                        <Card className="banner-card">
                            <div>
                                <i class="fa-solid fa-building-columns fa-2xl"></i>
                            </div>
                            <Card.Body>
                                <NavLink to="/admissions"><Button variant="light">Admissions</Button></NavLink>

                            </Card.Body>
                        </Card>
                        <Card className="banner-card">
                            <div>
                                <i class="fa-solid fa-flask-vial fa-2xl"></i>
                            </div>
                            <Card.Body>
                                <NavLink to="/research">
                                    <Button variant="light">Research</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                        <Card className="banner-card">
                            <div>
                                <i class="fa-solid fa-hard-drive fa-2xl"></i>
                            </div>
                            <Card.Body>
                                <NavLink to="/campus">
                                    <Button variant="light">Facilities</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>

                    </CardGroup>

                    <div className="banner-separator">

                    </div>

                    {/* line 2 */}
                    <CardGroup>
                        <Card className="banner-card">

                            <div>
                                <i class="fa-solid fa-calendar-days fa-2xl"></i>
                            </div>
                            <Card.Body>
                                <NavLink to="/event">
                                    <Button variant="light">Events</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                        <Card className="banner-card">
                            <div>
                                <i class="fa-solid fa-book fa-2xl"></i>
                            </div>
                            <Card.Body>
                                <NavLink to="/resources">
                                    <Button variant="light">Resources</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                        <Card className="banner-card">
                            <div>
                                <i class="fa-solid fa-laptop-code fa-2xl"></i>
                            </div>
                            <Card.Body>
                                <NavLink to="/placements">
                                    <Button variant="light">Placements</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                        <Card className="banner-card">
                            <div>
                                <i class="fa-solid fa-users fa-2xl"></i>
                            </div>
                            <Card.Body>
                                <NavLink to="/about">
                                    <Button variant="light">People</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default HomePageBanner;