import { Navbar, Container, Form, Button, Nav, NavDropdown } from 'react-bootstrap';

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="secondary">
      <Container fluid >
        <Navbar.Brand href="#" className='text-white border rounded p-2 fw-bold'>VideoGames</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#action1" className='text-white border btn btn-outline-secondary' disabled>Home</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Cerca</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
