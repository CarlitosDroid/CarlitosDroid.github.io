import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"

import logo from "../assets/logo_cd.png"


function TopNavbar() {

    const [expanded, setExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    return (
        <Navbar
            expanded={expanded}
            fixed='top'
            expand='md'
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href='/' className='d-flex'>
                    <img
                        src={logo}
                        className='img-fluid logo' alt='brand' />
                </Navbar.Brand>


                <Navbar.Toggle
                    aria-controls='responsive-navbar-nav'
                    onClick={() => {
                        setExpanded(expanded ? false : true);
                    }}
                />

                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="ms-auto">
                        <Nav.Link href='/'><AiOutlineHome style={{ marginBottom: "2px" }} /> Home</Nav.Link>
                        <Nav.Link href='/about'><AiOutlineUser style={{ marginBottom: "2px" }} />About</Nav.Link>
                        <Nav.Link href='/projects'>Projects</Nav.Link>
                        <Nav.Link href='/resume'><CgFileDocument /> Resume</Nav.Link>
                        <Nav.Link href='/blogs'>Blogs</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;