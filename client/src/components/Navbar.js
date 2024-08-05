import { Row, Col, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
const NavB = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Check for the authentication token in local storage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set to true if token exists, otherwise false
  }, []);
  const handleAuthAction = () => {
    if (isAuthenticated) {
      // Perform logout action
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    } else {
      // Perform login action
      // This is just a placeholder, replace with actual login logic
      localStorage.setItem('token', '');
      setIsAuthenticated(true);
    }
    
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="w-100">
          <Col>
          <Link to="/" className="no-underline">
          <Navbar.Brand  href="/">Wang-Lab</Navbar.Brand>
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
                  <Link to="/Login" style={{ textDecoration: "none" }}>
                  
      <NavDropdown.Item as="div" onClick={handleAuthAction}>
        {localStorage.getItem('token')? 'Logout' : 'Login'}
      </NavDropdown.Item>
    
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
