import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){
    return(
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/Home">CoinGecko</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as ={Link} to ="/Registro">Registro</Nav.Link>
                <Nav.Link as={Link} to= "/Login">Login</Nav.Link>
                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                <NavDropdown title="Moneda" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/Moneda/Alta">Alta</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
export default NavBar