import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap'
import FirstQuarter from './FirstQuarter'
import SecondQuarter from './SecondQuarter'
import VotesTrendFirstQuarter from './VotesTrendFirstQuarter'
import VotesTrendSecondQuarter from './VotesTrendSecondQuarter'
import useDecodedSession from '../../../../hooks/useDecodedSession'

const ElectronicRegister = ({ Student, dataStudents }) => {
    const decodeSubject = useDecodedSession()
    //console.log(dataStudents)
    const [renderTable, setRenderTable] = useState(false);
    const [handleOne, setHandleOne] = useState(false);
    const [renderTableTwo, setRenderTableTwo] = useState(false);
    const [handleTwo, setHandleTwo] = useState(false);

    const toggleClickOne = () => {
        setHandleOne(true)
        setRenderTable(!renderTable)
    }

    const toggleClickTwo = () => {
        setHandleTwo(true)
        setRenderTableTwo(!renderTable)
    }
    return (
        <>
            <Container>
                <Row>
                    <>
                        <Col>

                            <ListGroup.Item>
                                {
                                    Student &&
                                    <FirstQuarter
                                        Student={Student}
                                    />

                                }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {
                                    Student &&
                                    <SecondQuarter
                                        Student={Student}
                                    />
                                }
                            </ListGroup.Item>
                        </Col>
                    </>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Button variant="outline-dark" className='p-0' onClick={toggleClickOne}>Primo Quadrimestre</Button>
                        {
                            renderTable && handleOne &&
                            <>
                                <VotesTrendFirstQuarter
                                    Student={Student}
                                    decodeSubject={decodeSubject}
                                />
                            </>
                        }

                    </Col>
                    <Col>
                        <Button variant="outline-dark" className='p-0' onClick={toggleClickTwo}>Secondo Quadrimestre</Button>
                        {
                            renderTableTwo && handleTwo &&
                            <>
                                <VotesTrendSecondQuarter
                                    Student={Student}
                                    decodeSubject={decodeSubject}
                                />
                            </>
                        }

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ElectronicRegister