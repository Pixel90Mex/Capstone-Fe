import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from '../../UserArea/TeacherArea/ElectronicRegister/ProfileCard'
import useDecodedSession from '../../../hooks/useDecodedSession';

const UserTeacherHome = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [teacher, setTeacher] = useState(null);
    const decode = useDecodedSession();

    const getClasses = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/teacher/${decode.id}?page=${page}&pageSize=${pageSize}`);
            const data = await response.json();
            setTeacher(data);

        } catch (error) {
            console.log(error);
        };
    };
    useEffect(() => {
        getClasses()
    }, [page, pageSize]);
    //console.log(teacher)
    return (
        <>
            <Container id="MainContent">
                <Row>
                    <Col>
                        <ProfileCard
                            Teacher={teacher} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserTeacherHome