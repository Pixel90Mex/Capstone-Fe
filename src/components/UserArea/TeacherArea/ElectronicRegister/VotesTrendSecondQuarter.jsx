import React, { useEffect, useState } from 'react'
import { Modal, Button, Table } from "react-bootstrap"

const VotesTrendSecondQuarter = ({ Student, decodeSubject }) => {
    const idStudent = Student._id // è id dello studente
    const quad = "secondo_quadrimestre"
    const mat = decodeSubject.school_subject //è la materia del docente
    const [singleSubject, setSingleSubject] = useState(null)
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const getSubject = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/student/${idStudent}/subject?quad=${quad}&mat=${mat}`);
            const data = await response.json();
            setSingleSubject(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSubject()
    }, [quad, mat])
    console.log(singleSubject)
    function handleShow() {
        setFullscreen();
        setShow(true);
    }
    return (
        <>
            <Button 
                variant="outline-dark" 
                className="me-2 mb-2 w-50" 
                onClick={() => handleShow()}>
                    Registro valutazioni 
            </Button>
            <Modal size="lg" centered show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header style={{ backgroundColor: '#cdcdcd', color: '#3c3c3c', border: 'border-none' }} closeButton>
                    <Modal.Title>
                        Registro valutazioni
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0' style={{ backgroundColor: '#f8f9fa'}}>
                    <Table className='m-0' striped="columns" bordered hover responsive variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>ORALE</th>
                                <th>SCRITTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {singleSubject && singleSubject.subject.orale.map((item, index) => (
                                        <ul key={index}>{item}</ul>
                                    ))}
                                    <ul className='border-top'>Media: {singleSubject && singleSubject.subject.media_orale}</ul>
                                </td>
                                <td>
                                    {singleSubject && singleSubject.subject.scritto.map((item, index) => (
                                        <ul key={index}>{item}</ul>
                                    ))}
                                    <ul className='border-top'>Media: {singleSubject && singleSubject.subject.media_scritto}</ul>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VotesTrendSecondQuarter