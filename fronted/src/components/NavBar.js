import React from 'react'
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../assets/img/Logo-EasyStore.png"
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';


const NavBar = () => {
  const CloseSession = () => {
    localStorage.removeItem('user')
  }
  return (
    <>
      <Navbar bg="myColor" variant="dark" expand="lg">
        <Container fluid>
          <img src={img1} width="120" height="110" alt="logo de EasyStore" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="./proveedores" style={{color:"black",fontSize:"20px",padding:"10px"}}>Proveedores</Nav.Link>
              <Nav.Link href="./productos" style={{color:"black",fontSize:"20px",padding:"10px"}}>Productos</Nav.Link>
              <Nav.Link href="./facturas"  style={{color:"black",fontSize:"20px",padding:"10px"}}>Facturas</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar por Id"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            <Button variant="primary" href="/" onClick={CloseSession} style={{color:"black",marginLeft:"8px"}}>Salir</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
