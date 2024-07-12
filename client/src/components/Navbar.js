import { Row, Col, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavB = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="w-100">
          <Col>
          <Link to="/" style={{ textDecoration: "none"}}>
          <Navbar.Brand href="#home">Wang-Lab</Navbar.Brand>
          </Link>
            
          </Col>
          <Col className="text-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <NavDropdown>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <NavDropdown.Item as="div">Profile</NavDropdown.Item>
                  </Link>
                  <Link to="/userhistory" style={{ textDecoration: "none" }}>
                    <NavDropdown.Item as="div">Your Bookings</NavDropdown.Item>
                  </Link>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <NavDropdown.Item as="div">About Lab</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavB;
