import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import StudentFirstQuarter from "./VotesFirstQuarter/FirstQuarter/StudentFirstQuarter";
import StudentSecondQuarter from "./VotesSecondQuarter/SecondQuarter/StudentSecondQuarter";

const StudentProfileCard = ({ Student }) => {
    //console.log(Student)
    return (
        <>
            <Card style={{border: 'none ', backgroundColor:'#ebebeb '}}>
                <div className="text-black d-flex flex-row" style={{ backgroundColor: '#f8f9fa', height: '180px' }}>
                    <div className="ms-4 d-flex flex-column" style={{ width: '150px' }}>
                        <Image src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/61325188_10211278807886089_6079207078533005312_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yomORzSQZD4AX9rqYku&_nc_ht=scontent-mxp1-1.xx&oh=00_AfC4D8QZKne7vrtfIdkiLKrTnHFBM3jMK57uLJJNMGN6fw&oe=64D4EE8A"
                            alt="immagine" className="mt-5 mb-2 " fluid style={{ width: '150px', zIndex: '1' }} thumbnail />
                    </div>
                    {
                        Student && (
                            <div className="ms-5 me-2 mt-5 ps-5">
                                <Card.Title tag="h5" style={{fontSize:'21px',  color:'#3c3c3c'}}>{Student.student.name + ' ' + Student.student.surname}</Card.Title>
                                <Card.Text className="font-italic mb-1" style={{fontSize:'21px',  color:'#3c3c3c'}}>{Student.student.email}</Card.Text>
                                <Card.Text className="font-italic mb-1" style={{fontSize:'21px',  color:'#3c3c3c'}}>{Student.student.section}</Card.Text>
                            </div>
                        )
                    }
                </div>
                <Card.Body className="text-black p-4">
                <Card.Text className="font-italic mb-3" style={{fontSize:'21px',  color:'#3c3c3c'}}>REGISTRO</Card.Text>
                    <Row>
                        <Col>
                            {
                                Student && (
                                    <StudentFirstQuarter
                                        school_subjects={Student.student.school_subjects}
                                    />
                                )
                            }
                        </Col>
                        <Col>
                            {
                                Student && (
                                    <StudentSecondQuarter
                                        school_subjects={Student.student.school_subjects}
                                    />
                                )
                            }
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default StudentProfileCard