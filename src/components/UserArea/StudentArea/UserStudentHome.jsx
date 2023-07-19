import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import StudentProfileCard from "./StudentProfileCard";
import useDecodedSession from '../../../hooks/useDecodedSession';

const UserStudentHome = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    const [student, setStudent] = useState(null);
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
    },[page, pageSize]);
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