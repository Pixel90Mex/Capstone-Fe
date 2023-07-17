import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button, InputGroup } from 'react-bootstrap';
import useDecodedSession from "../../../../hooks/useDecodedSession";

const FirstQuarter = ({ Student }) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    //per prelevare materia
    const decode = useDecodedSession();
    console.log(decode.school_subject);

    //stati per form
    const [orale, setOrale] = useState(null)
    const [scritto, setScritto] = useState(null)

    const handleOrale = (e) => {
        setOrale(e.target.value);
    }
    const handleScritto = (e) => {
        setScritto(e.target.value);
    }

    const handlePatch = async () => {
        var contentBody = null
        if (orale !== null) {

            contentBody = {
                quad: "primo_quadrimestre",
                mat: decode.school_subject,
                type: "orale",
                value: Number(orale)
            }

        } else contentBody = {
            quad: "primo_quadrimestre",
            mat: decode.school_subject,
            type: "scritto",
            value: Number(scritto)
        }
        try {
            const data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/student/patchVote/${Student._id}`, {
                method: 'PATCH',
                body: JSON.stringify(contentBody)
            });
            const response = await data.json();
            if (response.statusCode !== 200) {
                console.log(response)
            } else {
                resetFields();
            }
        } catch (error) {
            console.log(error)
        }
    }
    const resetFields = () => {
        setOrale("");
        setScritto("")
    }
    function handleShow() {
        setFullscreen();
        setShow(true);
    }
    return (
        <>
            <Container fluid>
                <Button className="me-2 mb-2" onClick={() => handleShow()}>
                    Primo Quadrimestre
                </Button>
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{decode.school_subject}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col className='border 1' xs={6} md={6}>
                                    <InputGroup>
                                        <InputGroup.Text>Orale</InputGroup.Text>
                                        <Form.Control as="textarea" aria-label="With textarea" value={orale} onChange={handleOrale} />
                                    </InputGroup>
                                </Col>
                                <Col className='border 1' xs={6} md={6}>
                                    <InputGroup>
                                        <InputGroup.Text>Scritto</InputGroup.Text>
                                        <Form.Control as="textarea" aria-label="With textarea" value={scritto} onChange={handleScritto} />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Container>
                        <Button variant="secondary" onClick={handlePatch}>
                            invio
                        </Button>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}

export default FirstQuarter