import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const PlacementsForm = () => {

  const location = useLocation();
  console.log(location.state);
  const urlSubAddress = location.state.whatToDo;
  console.log(urlSubAddress);
  const documentKey = location.state.docKey;
  console.log(documentKey);
  
  const url = `https://render-server-ep07.onrender.com/`+ urlSubAddress + `Placements`
  // const url = `http://localhost:5000/`+ urlSubAddress + `Placements`

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let result = fetch(
      url,
      {
        method: "post",
        body: JSON.stringify({ title, desc, link, documentKey }),
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
      setDesc("");
      setLink("");
    }
  };

  return (
    <>
      <div>
      <Container>
        <Form className="form-resources">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title of Notes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description about notes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Link for pdf</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
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

export default PlacementsForm;
