import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Navbar, Nav, Row, Col }  from 'react-bootstrap';
import socket from './socket'

const NavBar = () => {

  const clickHandler=()=>{
    socket.emit('myClick')
    this.resetData()
  }
  
    return (
<Navbar collapseOnSelect className='nav' expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"><h3><strong>EconLab</strong></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/#About"><h5>About</h5></Nav.Link>
      <Nav.Link href="/simulation" onClick={clickHandler}><h5>Hand Sanitizer Simulation</h5></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link >
      <Row>
        <Col>
      <i class="fab fa-facebook-square icon"></i>
      </Col>
      <Col>
      <i class="fab fa-instagram icon"></i>
      </Col>
      <Col>
      
      <i class="fab fa-twitter-square icon"></i>
      </Col>

      </Row>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar
