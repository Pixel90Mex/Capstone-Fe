import React, { useState } from 'react'
import { Button, Nav, Container, Row, Col } from 'react-bootstrap';
import StudentTable from './StudentTable';

const StudentVotesCard = ({ school_subjects }) => {
    //console.log(school_subjects)
    const [renderTable, setRenderTable] = useState(false);
    /* const toggleTable = () => {
        setRenderTable(!renderTable)
    } */
    //test per renderizzare in base al bottone premuto
    const [handleOne, setHandleOne] = useState(false);
    const [handleTwo, setHandleTwo] = useState(false);
    const [handleThree, setHandleThree] = useState(false);
    const toggleClickOne = () => {
        setHandleOne(true)
        setRenderTable(!renderTable)
    }
    const toggleClickTwo = () => {
        setHandleTwo(true)
        setRenderTable(!renderTable)
    }
    const toggleClickThree = () => {
        setHandleThree(true)
        setRenderTable(!renderTable)
    }

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-between'>

                            <div>
                                <Button variant="outline-dark" className='p-0' onClick={toggleClickOne}>Primo Quadrimestre</Button>
                                {renderTable && handleOne &&
                                    <>
                                        <StudentTable
                                            school_subjects={school_subjects.primo_quadrimestre}
                                        />
                                    </>
                                }
                            </div>
                            <div>
                                <Button variant="outline-dark" className='p-0' onClick={toggleClickTwo}>Secondo Quadrimestre</Button>
                                {renderTable && handleTwo &&
                                    <>
                                        <StudentTable
                                            school_subjects={school_subjects.secondo_quadrimestre}
                                        />
                                    </>
                                }
                            </div>
                            <div>
                                <Button variant="outline-dark" className='p-0' onClick={toggleClickThree}>Medie</Button>
                                {renderTable && handleThree &&
                                    <>
                                        <StudentTable
                                            school_subjects={school_subjects.Media_voti_finale}
                                        />
                                    </>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default StudentVotesCard