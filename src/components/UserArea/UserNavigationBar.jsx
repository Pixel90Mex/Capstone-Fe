import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import logo from "../../Images/logo.png"
import "../../style/navBarUserArea.css";

const NavigationBar = () => {
    return (

        <Nav id='NavUser' className='align-items-center' fill variant="tabs" fixed="top">
            <Nav.Link href="/#"> <Image id='logo' src={logo} alt='logo' style={{ width: '140px' }} roundedCircle fluid /></Nav.Link>
            <Nav.Item>
                <Nav.Link style={{ fontSize: '21px', color: '#3c3c3c' }} href="/#">Profilo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ fontSize: '21px', color: '#3c3c3c' }} eventKey="link-1">Modalità operativa</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ fontSize: '21px', color: '#3c3c3c' }} eventKey="link-2">Materia</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ fontSize: '21px', color: '#3c3c3c' }} eventKey="link-2">Circolari</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ fontSize: '21px', color: '#3c3c3c' }} eventKey="link-2">Posta elettronica</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavigationBar;