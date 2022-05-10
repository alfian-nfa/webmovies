import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>Web Movies</Navbar.Brand>
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link href="#trending">Trending</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
