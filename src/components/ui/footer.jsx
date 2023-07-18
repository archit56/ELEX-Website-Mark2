import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="container-fluid footer-main-div">
      <div className="footer-container row">
        <div className="davv-logo-container col-sm">
          <img
            className="footer-davv-logo"
            src="%PUBLIC_URL%/../../../images/davv_logo.png"
            alt="DAVV logo"
          />
        </div>

        <div className="footer-sub-container col-sm">
          <h3>Links</h3>
          <ul>
            <li className="footer-list-item">
              <a
                className="footer-a-tag"
                href="https://www.dauniv.ac.in/"
                target="_blank"
              >
                University website
              </a>
            </li>
            <li className="footer-list-item">
              <a
                className="footer-a-tag"
                href="https://davv.mponline.gov.in/Portal/services/DAVVDASHBOARD/DAVVHOME.aspx"
                target="_blank"
              >
                University mponline
              </a>
            </li>
            <li className="footer-list-item">
              <a
                className="footer-a-tag"
                href="http://www.elex.dauniv.ac.in/"
                target="_blank"
              >
                Official website
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-sub-container col-sm">
          <h3>Address</h3>
          <p>
            Takshashila Campus, Khandwa Road, Indore (M.P.), India Pin - 452017
          </p>
        </div>
      </div>
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <a className="footer-brand-icon" href="https://www.facebook.com/SchoolOfElectronicsDAVV/" target="_blank">
          <i className="fa-brands fa-facebook fa-2xl"></i>{" "}
        </a>
        <a className="footer-brand-icon" href="https://www.linkedin.com/school/devi-ahilya-vishwavidyalaya-indore/?originalSubdomain=in" target="_blank">
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </a>
        <a className="footer-brand-icon" href="https://www.youtube.com/@soexdavvindore2756" target="_blank">
          <i class="fa-brands fa-youtube fa-2xl"></i>
        </a>
        <a className="footer-brand-icon" href="https://twitter.com/Davv_indore" target="_blank">
          <i className="fa-brands fa-twitter fa-2xl"></i>
        </a>
      </motion.div>
    </div>
  );
}

export default Footer;
