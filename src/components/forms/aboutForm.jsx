import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from 'react-router-dom'

const AboutForm = () => {
  // 
  console.log("Hello there guys")
  let location = useLocation();
  console.log(location.state);
  const urlSubAddress = location.state.whatToDo
  console.log(urlSubAddress)
  const documentKey = location.state.docKey;
  console.log(documentKey);
  //   
  const url = `https://render-server-ep07.onrender.com/`+ urlSubAddress + `Abouts`
  // const url = `http://localhost:5000/`+ urlSubAddress + `Abouts`
  console.log(url)

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [desig, setDesig] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resumeLink, setResumeLink] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let result = fetch(
      url,
      {
        method: "post",
        body: JSON.stringify({ img, name, desig, email, phone, resumeLink, documentKey}),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    // result = result.json();
    console.log(result);
    console.log("print this...")
    if (result) {
      alert("Data saved succesfully");
      
      setImg("");
      setName("");
      setDesig("");
      setEmail("");
      setPhone("");
      setResumeLink("");
    }
  };

  return (
    <>
      <div>
        <Container>
          <Form className="form-resources">

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Faculty Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Faculty image link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter link"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Faculty Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Designation"
                value={desig}
                onChange={(e) => setDesig(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Faculty Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Faculty Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone no."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Faculty Resume link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter link"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleOnSubmit}>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default AboutForm;
