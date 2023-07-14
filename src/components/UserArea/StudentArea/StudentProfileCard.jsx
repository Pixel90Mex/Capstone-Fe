import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import StudentVotesCard from './StudentVotesCard'

const StudentProfileCard = ({ Student }) => {
    console.log(Student)
    return (
        <>
            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                    <Col lg="9" xl="7">
                        <Card>
                            <div className="rounded-top text-black d-flex flex-row" style={{ backgroundColor: '#f8f9fa', height: '180px' }}>
                                <div className="ms-4 d-flex flex-column" style={{ width: '150px' }}>
                                    <Image src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/61325188_10211278807886089_6079207078533005312_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yomORzSQZD4AX9rqYku&_nc_ht=scontent-mxp1-1.xx&oh=00_AfC4D8QZKne7vrtfIdkiLKrTnHFBM3jMK57uLJJNMGN6fw&oe=64D4EE8A"
                                        alt="immagine" className="mt-5 mb-2 img-thumbnail " fluid style={{ width: '150px', zIndex: '1' }} roundedCircle />
                                </div>
                                {/* <div className="ms-5 me-2 ps-5 " style={{ marginTop: '70px' }}>
                                    <Card.Title tag="h5">{Student.student.name + ' ' + Student.student.surname}</Card.Title>
                                    <Card.Text className="font-italic mb-1">{'email: ' + Student.student.email}</Card.Text>
                                    <Card.Text className="font-italic mb-1">{Student.student.school_subjects}</Card.Text>
                                </div> */}
                            </div>
                            <Card.Body className="text-black p-4">
                                <Row>
                                  <Col>
                                  <StudentVotesCard
                                  
                                  />
                                  </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default StudentProfileCard