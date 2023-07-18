import React from "react";
import ContentSep from "./content_sep";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import UpdateBtn from "./update_btn.jsx";

function AboutTile(props) {
    const key = props.UniqueID;
    const deleteURL = "https://render-server-ep07.onrender.com/deleteAbouts"
    // const deleteURL = "http://localhost:5000/deleteAbouts"

        return (
            <>
            <Container>
                <div className="resources-buttons-div">

                    {/* update button */}
                    <UpdateBtn updateAddress = "/aboutForm" SetDisplay = {props.SetDisplay} docKey = {key} />

                    {/* delete button */}
                    <button className={"btn btn-outline-dark modify-btn "+props.SetDisplay} type="submit" onClick={
                        async (e) => {
                            e.preventDefault();
                            alert("Data deleted successfully")
                            await fetch(
                                deleteURL, {
                                method: "post",
                                body: JSON.stringify({ key }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }).then(ack => console.log(ack));
                        }
                    }>Delete</button>
                </div>

                <div className="container-fluid">
                    <div className="tile-main-div row">
                        <div className="col-lg-6 col-md-12 col-sm-12 tile-sub">
                            <div className="tile-content">
                                <h1 className="tile-heading">{props.Name}</h1>
                                <p className="tile-description">{props.Desig}</p>
                                <p className="tile-description">{props.Email}</p>
                                <p className="tile-description">{props.Phone}</p>
                            
                                <div className="tile-link">
                                <div className="events-div-to-center">
                                    <a href={props.ResumeLink} target="_blank" rel="noreferrer">
                                    <button className="btn btn-primary">Resume</button>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className="col-lg-6 col-md-12 col-sm-12 tile-sub"
                            initial={{ opacity: 0, scale: 0.5 }}
                            transition={{
                                duration: 1.0,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            whileInView={{ opacity: 1, scale: 1 }}
                        >
                            <img className="tile-image about-page-image" src={props.Img} alt="Slide" />
                        </motion.div>
                    </div>
                    <ContentSep />
                </div>
                </Container>
            </>
        );
}

export default AboutTile;
