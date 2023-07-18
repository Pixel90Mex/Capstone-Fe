import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FirstQuarter from './FirstQuarter'
import SecondQuarter from './SecondQuarter'
import VotesTrendFirstQuarter from './VotesTrendFirstQuarter'
import VotesTrendSecondQuarter from './VotesTrendSecondQuarter'
import useDecodedSession from '../../../../hooks/useDecodedSession'

const ElectronicRegister = ({ Student }) => {
    const decodeSubject = useDecodedSession()
    //console.log(dataStudents)
    const [renderTableOne, setRenderTableOne] = useState(false);
    const [renderTableTwo, setRenderTableTwo] = useState(false);
    const [handleOne, setHandleOne] = useState(false);
    const [handleTwo, setHandleTwo] = useState(false);

    const toggleClickOne = () => {
        setHandleOne(true)
        setRenderTableOne(!renderTableOne)
    }

    const toggleClickTwo = () => {
        setHandleTwo(true)
        setRenderTableTwo(!renderTableTwo)
    }
    return (
        <>
            <Container>
                <Row>
                    <Col >
                        <div className='mb-3'>
                            <h3 className='pb-2 font-italic'>PRIMO QUADRIMESTRE</h3>
                            <div className='d-flex align-items-center'>
                                {
                                    Student &&
                                    <FirstQuarter
                                        Student={Student}
                                    />

                                }
                            </div>
                            <div className='mt-3'>
                                <Button className='w-50 font-italic' variant="outline-dark" onClick={toggleClickOne}>Registro valutazioni</Button>
                                {
                                    renderTableOne && handleOne &&
                                    <>
                                        <VotesTrendFirstQuarter
                                            Student={Student}
                                            decodeSubject={decodeSubject}
                                        />
                                    </>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className='mb-3'>
                            <h3 className='pb-2'>SECONDO QUADRIMESTRE</h3>
                            <div>
                                {
                                    Student &&
                                    <SecondQuarter
                                        Student={Student}
                                    />
                                }
                            </div>
                            <div className='mt-3'>
                                <Button className='w-50' variant="outline-dark" onClick={toggleClickTwo}>Registro valutazioni</Button>
                                {
                                    renderTableTwo && handleTwo &&
                                    <>
                                        <VotesTrendSecondQuarter
                                            Student={Student}
                                            decodeSubject={decodeSubject}
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

export default ElectronicRegister