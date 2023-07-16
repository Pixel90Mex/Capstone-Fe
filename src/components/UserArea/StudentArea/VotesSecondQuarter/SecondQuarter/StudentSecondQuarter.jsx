import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import SecondQuarterSubjects from '../SecondQuarterSubjects';

const StudentSecondQuarter = ({ school_subjects }) => {
    //console.log(school_subjects)
    const [renderTable, setRenderTable] = useState(false);
    //test per renderizzare in base al bottone premuto
    const [handleTwo, setHandleTwo] = useState(false);
    const [handleThree, setHandleThree] = useState(false);
    
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
                                <Button variant="outline-dark" className='p-0' onClick={toggleClickTwo}>Secondo Quadrimestre</Button>
                                {renderTable && handleTwo &&
                                    <>
                                        <SecondQuarterSubjects
                                            school_subjects={school_subjects.secondo_quadrimestre}
                                        />
                                    </>
                                }
                            </div>
                            {/* <div>
                                <Button variant="outline-dark" className='p-0' onClick={toggleClickThree}>Medie</Button>
                                {renderTable && handleThree &&
                                    <>
                                        <Subjects
                                            school_subjects={school_subjects.Media_voti_finale}
                                        />
                                    </>
                                }
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default StudentSecondQuarter