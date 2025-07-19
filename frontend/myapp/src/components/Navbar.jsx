import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="text-dark">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-dark">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="text-dark">
              Dashboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
