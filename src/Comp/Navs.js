import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink}from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function BasicExample() {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className='nav-link btn btn-primary text-white mx-1 px-2'><FontAwesomeIcon icon={faHome}/> Home Loan</NavLink>
            <NavLink to="/personal" className='nav-link btn btn-primary text-white mx-1 px-2'><FontAwesomeIcon icon={faUser}/> Personal Loan</NavLink>
            <NavLink to="/car" className='nav-link btn btn-primary text-white mx-1 px-2'><FontAwesomeIcon icon={faCar}/> Car Loan</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

