import React, { useState } from 'react'
import { Button, Nav, Container, Row, Col } from 'react-bootstrap';
import FirstQuarterSubjects from '../FirstQuarterSubjects';

const StudentFirstQuarter= ({ school_subjects }) => {
    //console.log(school_subjects)
    const [renderTable, setRenderTable] = useState(false);
    const [handleOne, setHandleOne] = useState(false);

    const toggleClickOne = () => {
        setHandleOne(true)
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
                                        <FirstQuarterSubjects
                                            school_subjects={school_subjects.primo_quadrimestre}
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

export default StudentFirstQuarter