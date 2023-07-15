import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FirstQuarter from './FirstQuarter'
import SecondQuarter from './SecondQuarter'

const ElectronicRegister = ({ dataStudents, Student }) => {
    console.log(Student)
    return (
        <>
            <Container>
                <Row>
                    <>
                        <Col>
                            {
                                Student &&
                                <FirstQuarter
                                    //dataFirstQuarter={Student.school_subjects.primo_quadrimestre}
                                    Student={Student}
                                />

                            }
                        </Col>
                        <Col>
                            {
                                Student &&
                                <SecondQuarter
                                    Student={Student}
                                />
                            }

                        </Col>
                        <Col>
                            <Button>Prospetto Voti</Button>
                        </Col>
                    </>
                </Row>
            </Container>
        </>
    )
}

export default ElectronicRegister