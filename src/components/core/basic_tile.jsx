import React from "react";
import ContentSep from "./content_sep";
import { motion } from "framer-motion";

function BasicTile(props) {
  // switch the postion of image and text with respect to Id number
  if (props.Id % 2) {
    return (
      <div className="container-fluid home-page-topmost">
        <div className="tile-main-div row">
          <div className="col-lg-6 col-md-12 col-sm-12 tile-sub">
            <div className="tile-content">
              <h1 className="tile-heading">{props.Heading}</h1>
              <p className="tile-description">{props.Text}</p>
              <div className="tile-link">
                <a href={props.Link} target="_blank" rel="noreferrer">
                  <p></p>
                </a>
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
            <img className="tile-image" src={props.Image} alt="Slide" />
          </motion.div>
        </div>
        <ContentSep />
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div className="tile-main-div row">
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
            <img className="tile-image" src={props.Image} alt="Slide" />
          </motion.div>
          <div className="col-lg-6 col-md-12 col-sm-12 tile-sub">
            <div className="tile-content">
              <h1 className="tile-heading">{props.Heading}</h1>
              <p className="tile-description">{props.Text}</p>
              <div className="tile-link">
                <a href={props.Link} target="_blank" rel="noreferrer">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContentSep />
      </div>
    );
  }
}

export default BasicTile;
