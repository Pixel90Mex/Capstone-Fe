import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { dataOne, dataTwo } from "../../data/infoFooter"

const Footer = () => {
    return (
        <Container className="mt-5" style={{paddingTop: 10, paddingBottom: 50}}>
            <Row>
                <Col>
                    <ListGroup className="opacity-75" lg={4}>
                        {
                            dataOne.map((item) => {
                                return (
                                    <ListGroup.Item key={item.id} className="border border-0">{item.title}</ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup className="opacity-75" lg={4}>
                        {
                            dataTwo.map((item) => {
                                return (
                                    <ListGroup.Item key={item.id} className="border border-0">{item.title}</ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;