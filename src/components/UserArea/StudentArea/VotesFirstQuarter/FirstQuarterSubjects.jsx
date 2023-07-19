import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal } from "react-bootstrap";
import HistoryTable from "./FirstQuarter/TablesFirstQuarter/HistoryTable"
import PhilosophyTable from './FirstQuarter/TablesFirstQuarter/PhilosophyTable.jsx';
import ItalianTable from './FirstQuarter/TablesFirstQuarter/ItalianTable';
import MathTable from './FirstQuarter/TablesFirstQuarter/MathTable';
import ScienceTable from './FirstQuarter/TablesFirstQuarter/ScienceTable';
import PhysicalTable from './FirstQuarter/TablesFirstQuarter/PhysicalTable';
import PhysEd from './FirstQuarter/TablesFirstQuarter/PhysEd';

const FirstQuarterSubjects = (school_subjects) => {
    //console.log(school_subjects.school_subjects.storia)
    const [showTabStoria, setShowTabStoria] = useState(false);
    const [showTabFilosofia, setShowTabFilosofia] = useState(false);
    const [showTabItaliano, setShowTabItaliano] = useState(false);
    const [showTabMath, setShowTabMath] = useState(false);
    const [showTabScienze, setShowTabScienze] = useState(false);
    const [showTabFisica, setShowTabFisica] = useState(false);
    const [showTabEdFisica, setShowTabEdFisica] = useState(false);

    //per modale
    const [fullscreen, setFullscreen] = useState(true);

    function handleShowStoria() {
        setFullscreen();
        setShowTabStoria(true);
    }
    const handleShowFilosifia = () => {
        setFullscreen()
        setShowTabFilosofia(true)
    }
    const handleShowItaliano = () => {
        setFullscreen()
        setShowTabItaliano(true)
    }
    const handleShowMath = () => {
        setFullscreen()
        setShowTabMath(true)
    }
    const handleShowScienze = () => {
        setFullscreen()
        setShowTabScienze(true)
    }
    const handleShowFisica = () => {
        setFullscreen()
        setShowTabFisica(true)
    }
    const handleShowEdFisica = () => {
        setFullscreen()
        setShowTabEdFisica(true)
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={6} lg={6}>
                        <ListGroup className="mt-4">
                            <ListGroup.Item className='border-0' style={{ backgroundColor: '#ebebeb' }}>
                                <Button style={{ fontWeight: '600', width: '133px' }} variant="outline-dark" onClick={() => handleShowStoria()}>STORIA</Button>
                                {showTabStoria &&
                                    <>
                                        <Modal size="lg" centered show={showTabStoria} fullscreen={fullscreen} onHide={() => setShowTabStoria(false)}>
                                            <Modal.Header style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'none' }} closeButton>
                                                <Modal.Title>
                                                    Registro valutazioni
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className='p-0' style={{ backgroundColor: '#f8f9fa' }}>
                                                <HistoryTable
                                                    storia={school_subjects.school_subjects.storia}
                                                />
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0' style={{ backgroundColor: '#ebebeb' }}>
                                <Button style={{ fontWeight: '600', width: '133px' }} variant="outline-dark" onClick={() => handleShowFilosifia()}>FILOSOFIA</Button>
                                {showTabFilosofia &&
                                    <>
                                        <Modal size="lg" centered show={showTabFilosofia} fullscreen={fullscreen} onHide={() => setShowTabFilosofia(false)}>
                                            <Modal.Header style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'none' }} closeButton>
                                                <Modal.Title>
                                                    Registro valutazioni
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className='p-0' style={{ backgroundColor: '#f8f9fa' }}>
                                                <PhilosophyTable
                                                    filosofia={school_subjects.school_subjects.filosofia}
                                                />
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0' style={{ backgroundColor: '#ebebeb' }}>
                                <Button style={{ fontWeight: '600', width: '133px' }} variant="outline-dark" onClick={() => handleShowItaliano()}>ITALIANO</Button>
                                {showTabItaliano &&
                                    <>
                                        <Modal size="lg" centered show={showTabItaliano} fullscreen={fullscreen} onHide={() => setShowTabItaliano(false)}>
                                            <Modal.Header style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'none' }} closeButton>
                                                <Modal.Title>
                                                    Registro valutazioni
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className='p-0' style={{ backgroundColor: '#f8f9fa' }}>
                                                <ItalianTable
                                                    italiano={school_subjects.school_subjects.italiano}
                                                />
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0' style={{ backgroundColor: '#ebebeb' }}>
                                <Button style={{ fontWeight: '600', width: '133px' }} variant="outline-dark" onClick={() => handleShowMath()}>MATEMATICA</Button>
                                {showTabMath &&
                                    <>
                                        <Modal size="lg" centered show={showTabMath} fullscreen={fullscreen} onHide={() => setShowTabMath(false)}>
                                            <Modal.Header style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'none' }} closeButton>
                                                <Modal.Title>
                                                    Registro valutazioni
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className='p-0' style={{ backgroundColor: '#f8f9fa' }}>
                                                <MathTable
                                                    matematica={school_subjects.school_subjects.matematica}
                                                />
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={6} lg={6}>
                        <ListGroup className="mt-4">
                            <ListGroup.Item className='border-0' style={{ backgroundColor: '#ebebeb' }}>
                                <Button style={{ fontWeight: '600', width: '133px' }} variant="outline-dark" onClick={() => handleShowScienze()}>SCIENZE</Button>
                                {showTabScienze &&
                                    <>
                                        <Modal size="lg" centered show={showTabScienze} fullscreen={fullscreen} onHide={() => setShowTabScienze(false)}>
                                            <Modal.Header style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'none' }} closeButton>
                                                <Modal.Title>
                                                    Registro valutazioni
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className='p-0' style={{ backgroundColor: '#f8f9fa' }}>
                                                <ScienceTable
                                                    scienze={school_subjects.school_subjects.scienze}
                                                />
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0' style={{ backgroundColor: '#ebebeb' }}>
                                <Button style={{ fontWeight: '600', width: '133px' }} variant="outline-dark" onClick={() => handleShowFisica()}>FISICA</Button>
                                {showTabFisica &&
                                    <>
                                        <Modal size="lg" centered show={showTabFisica} fullscreen={fullscreen} onHide={() => setShowTabFisica(false)}>
                                            <Modal.Header style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'none' }} closeButton>
                                                <Modal.Title>
                                                    Registro valutazioni
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className='p-0' style={{ backgroundColor: '#f8f9fa' }}>
                                                <PhysicalTable
                                                    fisica={school_subjects.school_subjects.fisica}
                                                />
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                            </ListGroup.Item>
                            <ListGroup.Item className='border-0' style={{ backgroundColor: '#ebebeb' }}>
                                <Button style={{ fontWeight: '600', width: '133px' }} variant="outline-dark" onClick={() => handleShowEdFisica()}>ED. FISICA</Button>
                                {showTabEdFisica &&
                                    <>
                                        <Modal size="lg" centered show={showTabEdFisica} fullscreen={fullscreen} onHide={() => setShowTabEdFisica(false)}>
                                            <Modal.Header style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'none' }} closeButton>
                                                <Modal.Title>
                                                    Registro valutazioni
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className='p-0' style={{ backgroundColor: '#f8f9fa' }}>
                                                <PhysEd
                                                    edFisica={school_subjects.school_subjects.educazione_fisica}
                                                />
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FirstQuarterSubjects