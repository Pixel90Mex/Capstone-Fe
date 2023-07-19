import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from '../../UserArea/TeacherArea/ElectronicRegister/ProfileCard'
import useDecodedSession from '../../../hooks/useDecodedSession';
import useSession from '../../../hooks/useSession';

const UserTeacherHome = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [teacher, setTeacher] = useState(null);
    const decode = useDecodedSession();
    const session = useSession();

    const getClasses = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/teacher/${decode.id}?page=${page}&pageSize=${pageSize}`, {
                headers: {
                    "Content-Type": "application/json",
                    auth: session
                  },
            });
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
            <Container fluid>
                <Row>
                    <Col className='p-0'>
                        <ProfileCard
                            Teacher={teacher} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserTeacherHome