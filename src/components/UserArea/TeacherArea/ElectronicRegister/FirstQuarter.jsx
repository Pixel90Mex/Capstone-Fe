import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button, InputGroup } from 'react-bootstrap';


const FirstQuarter = ({ dataFirstQuarter, Student }) => {
    /* console.log("id", Student._id)
    console.log("materie:", dataFirstQuarter); */
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    //stati per form
    const [orale, setOrale] = useState(null)
    const [scritto, setScritto] = useState(null)

    const handleOrale = (e) => {
        setOrale(e.target.value);
    }
    const handleScritto = (e) => {
        setScritto(e.target.value);
    }

    /* const handlePatch = async () => {
        let arrayOral = Student.school_subjcets.primo_quadrimestre.storia.orale;
        let arrayScritto = Student.school_subjcets.primo_quadrimestre.storia.scritto;
        arrayOral.push(orale)
        arrayScritto.push(scritto)
        const newStudent = {...Student, 
            school_subjcets: {
                primo_quadrimestre: [
                    storia: {
                        orale: [4,5,9]
                    
                    }
                ]
            }
        }
        try {
            const data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/student/${Student._id}`, {
                method: 'PATCH',
                body: //passo nel body
                headers: {
                    Content-Type: "application/json",
                }
            }); 
            const response = await data.json();
            if(response.statusCode !== 200) {
                console.log(error)
            } else {
                resetFields();
            }
        } catch (error) {
            console.log("Errore nell'invio dei dati")
        }
    } */
    const resetFields = () => {
        setOrale("");
        setScritto("")
    }
    //primo_quadrimestre[0].educazione_fisica
    function handleShow() {
        setFullscreen();
        setShow(true);
    }
    return (
        <>
            <Button className="me-2 mb-2" onClick={() => handleShow()}>
                Primo Quadrimestre
            </Button>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>STUDENTE</Modal.Title>
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
                    <Button variant="secondary" /* onClick={handlePatch} */ >
                        invio
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FirstQuarter