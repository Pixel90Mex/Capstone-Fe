import React from 'react'
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap'
import FirstQuarter from './FirstQuarter'
import SecondQuarter from './SecondQuarter'
import VotesTrendFirstQuarter from './VotesTrendFirstQuarter'
import VotesTrendSecondQuarter from './VotesTrendSecondQuarter'
import useDecodedSession from '../../../../hooks/useDecodedSession'

const ElectronicRegister = ({ Student, dataStudents }) => {
    const decodeSubject = useDecodedSession()
    //console.log(dataStudents)
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
                        <VotesTrendFirstQuarter
                            Student={Student}
                            decodeSubject={decodeSubject}
                        />
                    </Col>
                    <Col>
                        <VotesTrendSecondQuarter
                            Student={Student}
                            decodeSubject={decodeSubject}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ElectronicRegister