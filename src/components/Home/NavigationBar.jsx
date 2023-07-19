import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Nav, Navbar, NavDropdown, Image, Offcanvas } from 'react-bootstrap';
import logo from "../../Images/logo.png"
import "../../style/Navbar.css"

const NavigationBar = () => {
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
                            <Nav
                                className="my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                            >
                                <NavDropdown id='nav-dropdown' className='ps-2 ms-5 fs-3' title="Istituto" >
                                    <NavDropdown.Item className='drop' style={{ backgroundColor: '#ebebeb' }}>Chi siamo</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Organigramma</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">PTOF e regolamenti</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Piano degli studi</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }}href="#action4">DSA e BES</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }}href="#action4">PROGETTI</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }}href="#action4">BULLISMO e CYBERBULLISMO</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }}href="#action4">ORIENTAMENTO</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }}href="#action4">SICUREZZA</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }}href="#action4">BIBLIOTECA</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 ms-5 fs-3' title="Segreteria" >
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href='/Login'>URP</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Modulistica</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Info e pagamenti</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Iscrizioni</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">MAD e reclutamento</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Amministrazione trasparente</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 ms-5 fs-3' title="Didattica" >
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href='/Login'>Calendario lezioni</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Orario lezioni</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Libri di testo</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Tutoraggio e recupero</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Giornalino</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Statuto docenti</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Laboratori di classe</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='ps-2 ms-5 fs-3' title="Docenti" id="navbarScrollingDropdown4">
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href='/Login'>Assegnazione classi</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Incarichi ed elenchi coordinatori</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Orario lezioni</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Planning</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Giornalino</NavDropdown.Item>
                                    <NavDropdown.Item style={{ backgroundColor: '#ebebeb' }} href="#action4">Registro supplenze docenti</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className='ps-5 me-2 fs-3' href="/Login">Login</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;