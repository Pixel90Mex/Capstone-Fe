import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import StudentProfileCard from "./StudentProfileCard";
import useDecodedSession from '../../../hooks/useDecodedSession';

const UserStudentHome = () => {
    const [student, setStudent] = useState(null);
    const decode = useDecodedSession();

    const getStudent = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/student/${decode.id}`);
            const data = await response.json();
            setStudent(data);

        } catch (error) {
            console.log(error);
        };
    };
    useEffect(() => {
        getStudent();
    });
    console.log("student", student);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col className='p-0'>
                        <StudentProfileCard
                            Student={student}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserStudentHome