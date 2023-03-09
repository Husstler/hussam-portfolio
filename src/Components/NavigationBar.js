import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

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
            <Nav.Link as={Link} to="/web">
              Web Usability
            </Nav.Link>
            <Nav.Link as={Link} to="/flappybird">
              Flappy Bird
            </Nav.Link>
            <Nav.Link as={Link} to="/snakeGame">
              Snake Game
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;





