import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const fetchURL = 'https://render-server-ep07.onrender.com/login';
// const fetchURL = 'http://localhost:5000/login';

let isLogged = false;

const LoginLogout = () => {

  const fetchData = async () => {

    const response = await fetch(fetchURL);
    const responseData = await response.json();
    isLogged = responseData[0].isLogged;
    console.log("useEffect" + isLogged);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnSubmit = () => {
    let result = fetch(
      fetchURL,
      {
        method: "post",
        body: JSON.stringify({ isLogged }),
        headers: {
          "Content-Type": "application/json"
        }
      });
  }

  if (isLogged) {
    return (
      <>
        <button onClick={handleOnSubmit} type="button" className="login-btn btn btn-outline-light">
          Logout
        </button>
      </>
    )
  } else if (!isLogged) {
    return (
      <>
        <NavLink to="/login">
          <button type="button" onClick={handleOnSubmit} className="login-btn btn btn-outline-light">
            Login
          </button>
        </NavLink>
      </>
    )
  }
}

export default LoginLogout;