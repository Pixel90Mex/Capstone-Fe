import React from 'react';
import { Container, Nav, Navbar, Offcanvas, Image } from 'react-bootstrap';
import logo from "../../../Images/logo.png"

const StudentNavigationBar = () => {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: ' #ebebeb' }}>
                <Container fluid>
                    <Navbar.Brand className='ps-5' href='/'>
                        <Image src={logo} alt='logo' style={{ width: '140px' }} roundedCircle fluid /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav.Item>
                                <Nav.Link className='ps-5 fs-3' href="/#">Profilo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='ps-5 fs-3' eventKey="link-1">Iniziative</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='ps-5 fs-3' eventKey="link-2">Docenti</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='ps-5 fs-3' eventKey="link-2">Circolari</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='ps-5 fs-3' eventKey="link-2">Posta</Nav.Link>
                            </Nav.Item>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default StudentNavigationBar;