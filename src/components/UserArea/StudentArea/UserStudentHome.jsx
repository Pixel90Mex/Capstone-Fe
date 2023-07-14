import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import StudentProfileCard from "./StudentProfileCard";
import useDecodedSession from '../../../hooks/useDecodedSession';

const UserStudentHome = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [student, setStudent] = useState({});
    console.log("student", student);
    const decode = useDecodedSession();

    const getStudent = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/student/${decode.id}?page=${page}&pageSize=${pageSize}`);
            const data = await response.json();
            setStudent(data);

        } catch (error) {
            console.log(error);
        };
    };
    useEffect(() => {
        getStudent();
    }, [page, pageSize]);

    return (
        <>
            <Container id="MainContent">
                <Row>
                    <Col className='mt-5 d-flex flex-wrap gap-3'>
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