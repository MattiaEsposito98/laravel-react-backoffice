import { Navbar, Container, Form, Button, Nav, NavDropdown } from 'react-bootstrap';

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="light">
      <Container fluid >
        <Navbar.Brand href="#">VideoGames</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#action1">Home</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Cerca</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
