import React from "react"
import ContentSep from "./content_sep";
import { Container} from "react-bootstrap";
import UpdateBtn from "./update_btn";
import { motion } from "framer-motion";

const EventsTile = (props) => {
    const key = props.UniqueID;
    const deleteURL = 'https://render-server-ep07.onrender.com/deleteEvents';
    // const deleteURL = 'http://localhost:5000/deleteEvents';
    return (
        <>
        <Container>
            <div className="resources-buttons-div">

                {/* update button */}
                <UpdateBtn updateAddress = "/eventsForm" SetDisplay={props.SetDisplay} docKey = {key} />

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

            <div className="container-fluid">
                <div className="tile-main-div row">
                    <div className="col-lg-6 col-md-12 col-sm-12 tile-sub">
                        <div className="tile-content">
                            <h1 className="tile-heading">{props.Title}</h1>
                            <p className="tile-description">{props.Desc}</p>
                            <div className="tile-link">
                            <div className="events-div-to-center">
                                <a href={props.Link} target="_blank" rel="noreferrer">
                                <button className="btn btn-primary">More Info...</button>
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
                        <img className="events-page-tile-image" src={props.Img} alt="Slide" />
                    </motion.div>
                </div>
                <ContentSep />
            </div>
            </Container>
        </>
    );
}

export default EventsTile;