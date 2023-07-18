
//! --------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import {Button, Card, Container} from 'react-bootstrap';
// require("dotenv").config();

// const loginURL = 'http://localhost:5000/login';
const loginURL = 'https://render-server-ep07.onrender.com/login';

const fetchURL = "https://render-server-ep07.onrender.com/login";
// const fetchURL = "http://localhost:5000/login";

function Login() {
  let [heading, setHeading] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [isLogged, setIsLogged] = useState("sssss");

  const fetchData = async () => {
    try {
      const response = await fetch(loginURL);
      const responseData = await response.json();
      setIsLogged(responseData[0].isLogged);
      console.log("isLogged: " + isLogged);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Checking On Submit");

      if (name === process.env.REACT_APP_SECRET_USERNANME && password === process.env.REACT_APP_SECRET_PASSWORD) {
      setIsLogged("haha");

      console.log(isLogged);
      alert("Login successful");

      let result = fetch(
        fetchURL,
        {
          method: "post",
          body: JSON.stringify({ isLogged: true }),
          headers: {
            "Content-Type": "application/json"
          }
        });
    }
    else {
      setIsLogged("");
      console.log(isLogged);
      alert("Name or Password wrong!\n Please try again");
      setHeading("");
      setName("");
      setPassword("");
    }
    console.log(isLogged);

  }

  const handleLogout = () => {
    setIsLogged(false);
    console.log(isLogged);
    alert("You have successfully logged out");
    setHeading("");
    setName("");
    setPassword("");

    console.log(isLogged);
    let result = fetch(
      fetchURL,
      {
        method: "post",
        body: JSON.stringify({ isLogged: false }),
        headers: {
          "Content-Type": "application/json"
        }
      });

    // window.location.reload();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="logout-topmost-div">
    <Container>
      {isLogged ? (
        <>
          {/* when logged in */}
          <Card>
            <Card.Header><b>Welcome</b></Card.Header>
            <Card.Body>
              <Card.Title>You are currently logged in</Card.Title>
              <Card.Text>
                You can now edit the contents of the website
              </Card.Text>
              <button
            type="submit"
            className="btn btn-outline-secondary login-submit-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
            </Card.Body>
          </Card>

        </>
      ) : (
        <>
          {/* when logged out */}
          <div className="login-container">
            <div className="login-heading">Hello {heading}</div>

            <form className="login-form">
              <div className="form-group login-input-email">
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  value={name}
                  onChange={
                    (e) => {
                      setHeading(e.target.value);
                      setName(e.target.value);
                    }
                  }
                />
              </div>
              <div className="form-group login-input-password">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-secondary login-submit-btn"
                onClick={handleOnSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </>
      )}
      </Container>
    </div>
  )
}

export default Login;
