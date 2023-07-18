
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ContactInfoForm = () => {

  const location = useLocation();
  console.log(location.state);
  const urlSubAddress = location.state.whatToDo;
  console.log(urlSubAddress);
  const documentKey = location.state.docKey;
  console.log(documentKey);

  const url = "https://render-server-ep07.onrender.com/" + urlSubAddress + "Contacts";
//  const url = "http://localhost:5000/" + urlSubAddress + "Contacts";

  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("kjsdhkjhskghks")
    let result = fetch(
      url,
      {
        method: "post",
        body: JSON.stringify({ mobile1, mobile2, email1, email2, documentKey}),
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
      setMobile1("");
      setMobile2("");
      setEmail1("");
      setEmail2("");
    }
  };

  return (
    <>
      <div>
      <Container>
        <Form className="form-resources">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile main</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter heading"
              value={mobile1}
              onChange={(e) => setMobile1(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mobile alternative</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={mobile2}
              onChange={(e) => setMobile2(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email main</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email alternative</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
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

export default ContactInfoForm;
