import CartWidget from "../CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/">
                <img
                alt=""
                src="/src/assets/logo.png"
                width="150"
                height="53"
                className="d-inline-block align-top"
                />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <NavLink style={{padding: "10px",  color: "grey", textDecoration:"none"}} to={'/category/Self-help'}>
                        Self-help
                        </NavLink>
                        <NavLink style={{padding: "10px",  color: "grey", textDecoration:"none"}} to={'/category/Adventure'}>
                        Adventure
                        </NavLink>
                        <NavLink style={{padding: "10px",  color: "grey", textDecoration:"none"}} to={'/category/Biography'}>
                        Biography
                        </NavLink>
                        <NavLink style={{padding: "10px",  color: "grey", textDecoration:"none"}} to={'/category/Drama'}>
                        Drama
                        </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
            </Navbar>
            
        </div>
    )
}

export default NavBar;