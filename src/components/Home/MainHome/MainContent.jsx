import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainCard from "./MainCard"
import { mainItems } from "../../../data/mainItems";
/* import "../../../style/Home.css" */

const MainContent = () => {
    return (
        <>
            <Container id="MainContent"className="m-0 p-o" style={{backgroundColor: ' #ebebeb'}} fluid>
                <Row>
                    <Col className='mt-5 mb-5 d-flex flex-wrap gap-5' style={{justifyContent: 'center'}}lg={12}>
                        {
                            mainItems.map((item) => (
                                <MainCard
                                key={item.id}
                                title={item.title}
                                img={item.src}
                                alt={item.alt}
                                href={item.href}
                                />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MainContent;