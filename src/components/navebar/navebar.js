import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Nav} from 'react-bootstrap';

class Navebar extends Component {
  render() {
    return (
      <>

      <Row style= {{marginTop:'85px'}}>
        {/* <Col className='m-0'></Col> */}
      </Row>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style ={{ position: "fixed",
  top:"0",
  width: "100%",
  zIndex: "100"
}}>
      <Container className='m-3'>
        <Navbar.Brand href="/home">Princess-Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {/* <Nav.Link href="/home">Home</Nav.Link>   */}

            <Nav.Link  href='/contact'>Contact</Nav.Link>

            <Nav.Link href="/about">About Us</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="/Login">Login</Nav.Link> */}
            {/* <Nav.Link href="/SignUp">SignUp</Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
      
      </>
      
    );
  }
}

export default Navebar;