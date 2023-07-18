// import React from "react";
// import { NavLink } from "react-router-dom";
// import LoginLogout from "../core/login_logout";

// const Navbar = () => {

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           <img
//             className="davv-logo"
//             src="%PUBLIC_URL%/../../../images/davv_logo.png"
//             alt="DAVV logo"
//           />
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-menu">
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link navbar-home"
//                 aria-current="page"
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 aria-current="page"
//                 to="/announcements"
//               >
//                 Announcements
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="nav-link" to="/admissions">
//                 Admissions
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="nav-link" to="/research">
//                 Research
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/campus">
//                 Facilities
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/event">
//                 Events
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/resources">
//                 Resources
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/placements">
//                 Placements
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">
//                 People
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact">
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <LoginLogout />
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//!

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginLogout from "../core/login_logout";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            className="davv-logo"
            src="%PUBLIC_URL%/../../../images/davv_logo.png"
            alt="DAVV logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${isNavbarOpen ? " show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-menu">
            <li className="nav-item">
              <NavLink
                className="nav-link navbar-home"
                aria-current="page"
                to="/"
                onClick={closeNavbar}
              >
                Home
              </NavLink>
            </li>
            {/* Other navigation links */}
            <li className="nav-item">
              <NavLink
                className="nav-link navbar-home"
                aria-current="page"
                to="/announcements"
                onClick={closeNavbar}
              >
                Announcements
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link navbar-home" to="/admissions" onClick={closeNavbar}>
                Admissions
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link navbar-home" to="/research" onClick={closeNavbar}>
                Research
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link navbar-home" to="/campus" onClick={closeNavbar}>
                Facilities
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link navbar-home" to="/event" onClick={closeNavbar}>
                Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link navbar-home" to="/resources" onClick={closeNavbar}>
                Resources
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link navbar-home" to="/placements" onClick={closeNavbar}>
                Placements
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link navbar-home" to="/about" onClick={closeNavbar}>
                People
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link navbar-home" to="/contact" onClick={closeNavbar}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
          <NavLink to="/login">
          <button type="button" onClick={closeNavbar} className="login-btn btn btn-outline-light">
            Login
          </button>
        </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

