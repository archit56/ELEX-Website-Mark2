import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const AdmissionsForm = () => {

  const location = useLocation();
  console.log(location.state);
  const urlSubAddress = location.state.whatToDo;
  console.log(urlSubAddress);
  const documentKey = location.state.docKey;
  console.log(documentKey);

 const url = "https://render-server-ep07.onrender.com/" + urlSubAddress + "Admission";
//  const url = "http://localhost:5000/" + urlSubAddress + "Admission";

  const [title, setTitle] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [link4, setLink4] = useState("");

  const handleOnSubmit = (e) => {

    e.preventDefault();

    let result = fetch(
      url,
      {
        method: "post",
        body: JSON.stringify({ title, desc1, desc2, link1, link2, link3, link4, documentKey}),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    // result = result.json();
    console.log(result);
    if (result) {
      alert("Data saved succesfully");
      setTitle("");
      setDesc1("");
      setDesc2("");
      setLink1("");
      setLink2("");
      setLink3("");
      setLink4("");
    }
  };

  return (
    <>
      <div>
      <Container>
        <Form className="form-resources">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Degree name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter degree"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description about Degree</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={desc1}
              onChange={(e) => setDesc1(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Link for Eligibility pdf</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link"
              value={link1}
              onChange={(e) => setLink1(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Link for Fee Structure pdf</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link"
              value={link2}
              onChange={(e) => setLink2(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Link for Schemes pdf</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link"
              value={link3}
              onChange={(e) => setLink3(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Link for Application form</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link"
              value={link4}
              onChange={(e) => setLink4(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>More Info</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={desc2}
              onChange={(e) => setDesc2(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit" onClick={handleOnSubmit}>
            Submit
          </Button>
        </Form>
        </Container>
      </div>
    </>
  );
};

export default AdmissionsForm;
