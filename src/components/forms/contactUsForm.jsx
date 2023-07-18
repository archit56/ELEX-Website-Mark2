import React from "react"
import { useState } from "react"
import { Form, FloatingLabel, Container, Button, FormLabel } from "react-bootstrap"

const ContactUsForm = () => {

    const [name, setName] = useState("");
    // const [topic, setTopic] = useState("");
    const [subject, setSubject] = useState("");
    const [comment, setComment] = useState("");
    const handleSubmit = () => {
        console.log("Handled submit")
    }
    
    const body_text = `Name: ${name}\n Query: ${comment}`;
    const subject_text = subject;
    const main_link = "mailto:sampleemail@gmail.com?subject=" + subject_text + "&body=" + body_text;

    return (
        <>
            <Container>
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                        onChange={(e) => setName(e.target.value)}
                    >
                        <Form.Control name="name" type="text" placeholder="SampleName" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Subject of Query" className="mb-3">
                        <Form.Control name="query subject" type="text" placeholder="sampleQuery" onChange={(e) => setSubject(e.target.value)}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3">
                        <Form.Control
                            name="comments"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </FloatingLabel>

                    <a href={main_link}>
                        <Button variant="primary">Submit</Button>
                    </a>


                </Form>
            </Container>
        </>
    )
}

export default ContactUsForm;