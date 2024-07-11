import { Row,Col,Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavB = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="w-100">
          <Col>
            <Navbar.Brand href="#home">Wang-Lab</Navbar.Brand>
          </Col>
          <Col className="text-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
               
              <NavDropdown
          
            >
                  <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Your Bookings</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">About Lab</NavDropdown.Item>
                  
                  
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
