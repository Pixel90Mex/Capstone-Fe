import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'

const ProfileCard = ({ Teacher }) => {
    console.log(Teacher.Teacher.name)
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
                                <div className="ms-5 me-2 ps-5 " style={{ marginTop: '70px' }}>
                                    <Card.Title tag="h5">{Teacher.Teacher.name + ' ' + Teacher.Teacher.surname}</Card.Title>
                                    <Card.Text className="font-italic mb-1">{'email: ' + Teacher.Teacher.email}</Card.Text>
                                    <Card.Text className="font-italic mb-1">{Teacher.Teacher.school_subject}</Card.Text>
                                </div>
                            </div>
                            <Card.Body className="text-black p-4">
                                
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Card.Text className="lead fw-normal mb-0">Recent photos</Card.Text>
                                    <Card.Text className="mb-0"><a href="#!" className="text-muted">Show all</a></Card.Text>
                                </div>
                                <Row>
                                    <Col className="mb-2">
                                        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </Col>
                                    <Col className="mb-2">
                                        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </Col>
                                </Row>
                                <Row className="g-2">
                                    <Col className="mb-2">
                                        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </Col>
                                    <Col className="mb-2">
                                        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                            alt="image 1" className="w-100 rounded-3" />
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

export default ProfileCard