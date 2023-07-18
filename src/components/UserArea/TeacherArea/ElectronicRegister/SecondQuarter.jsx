import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button, InputGroup } from 'react-bootstrap';
import useDecodedSession from "../../../../hooks/useDecodedSession";

const SecondQuarter = ({ Student }) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    //per prelevare materia
    const decode = useDecodedSession();
    console.log(decode.school_subject)

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
                quad: "secondo_quadrimestre",
                mat: decode.school_subject,
                type: "orale",
                value: Number(orale)
            }

        } else contentBody = {
            quad: "secondo_quadrimestre",
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
            <Button variant="outline-dark" className="me-2 mb-2 w-50 font-italic" onClick={() => handleShow()}>
                inserisci valutazione
            </Button>
            <Modal centered show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header style={{ backgroundColor: '#4bb3bc' }} closeButton>
                    <Modal.Title className='font-italic'>{Student.name + ' ' + Student.surname}</Modal.Title>
                </Modal.Header>
                <Modal.Body centered style={{ backgroundColor: '#4bb3bc' }}>
                    <h4>{decode.school_subject} </h4>
                    <Container>
                        <Row>
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Control autoFocus placeholder='orale' value={orale} onChange={handleOrale} />
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form>

                                    <Form.Control autoFocus placeholder='scritto' value={scritto} onChange={handleScritto} />
                                </Form>
                            </Col>

                        </Row>
                    </Container>
                    <Button variant="outline-dark" className='mt-3' onClick={handlePatch}>
                        invio
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SecondQuarter