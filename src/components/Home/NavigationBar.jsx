import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import logo from "../../Images/logo.png"

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container fluid>
                <Navbar.Brand className='ps-5' href='/'>
                    <Image src={logo} alt='logo' style={{width:'90px'}} roundedCircle fluid /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', maxWidth: '' }}
                        navbarScroll
                    >
                        <NavDropdown className='ps-5' title="Istituto" id="navbarScrollingDropdown">
                            <NavDropdown.Item href='/Login'>Chi siamo</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Organigramma</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">PTOF e regolamenti</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Piano degli studi</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">DSA e BES</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">PROGETTI</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">BULLISMO e CYBERBULLISMO</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">ORIENTAMENTO</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">SICUREZZA</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">BIBLIOTECA</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <NavDropdown className='ps-5' title="Segreteria" id="navbarScrollingDropdown">
                            <NavDropdown.Item href='/Login'>URP</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Modulistica</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Info e pagamenti</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Iscrizioni</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">MAD e reclutamento</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Amministrazione trasparente</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <NavDropdown className='ps-5' title="Didattica" id="navbarScrollingDropdown">
                            <NavDropdown.Item href='/Login'>Calendario lezioni</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Orario lezioni</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Libri di testo</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Tutoraggio e recupero</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Giornalino</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Statuto docenti</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Laboratori di classe</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <NavDropdown className='ps-5' title="Docenti" id="navbarScrollingDropdown">
                            <NavDropdown.Item href='/Login'>Assegnazione classi</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Incarichi ed elenchi coordinatori</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Orario lezioni</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Planning</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Giornalino</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Registro supplenze docenti</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link className='ps-5' href="/Login">Login</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;