import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ResearchForm = () => {

  const location = useLocation();
  console.log(location.state);
  const urlSubAddress = location.state.whatToDo;
  console.log(urlSubAddress);
  const documentKey = location.state.docKey;
  console.log(documentKey);

 const url = "https://render-server-ep07.onrender.com/" + urlSubAddress + "Research";
// const url = "http://localhost:5000/" + urlSubAddress + "Research";

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [grant, setGrant] = useState("");
  const [investigator, setInvestigator] = useState("");
  const [agency, setAgency] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let result = fetch(
      url,
      {
        method: "post",
        body: JSON.stringify({ title, year, grant, investigator, agency, documentKey}),
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
      setTitle("");
      setYear("");
      setGrant("");
      setInvestigator("");
      setAgency("");
    }
  };

  return (
    <>
      <div>
      <Container>
        <Form className="form-resources">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Grants alloted</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter amount"
              value={grant}
              onChange={(e) => setGrant(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>investigator name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={investigator}
              onChange={(e) => setInvestigator(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Agency name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={agency}
              onChange={(e) => setAgency(e.target.value)}
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

export default ResearchForm;
