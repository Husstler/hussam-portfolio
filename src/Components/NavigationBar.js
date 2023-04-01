import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ zIndex: 100 }}>
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Multimedia Elements" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/web">
                Web Usability
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Images">
                Images
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Animation">
                Animation
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/chatbot">
              Chatbot (Beta)
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;





/*
            <Nav.Link as={Link} to="/flappybird">
              Flappy Bird
            </Nav.Link>
            <Nav.Link as={Link} to="/snakeGame">
              Snake Game
            </Nav.Link>
*/