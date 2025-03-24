import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function CustomNavbar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" >
      <Container fluid >
        <Navbar.Brand className='text-white border rounded p-2 fw-bold'>VideoGames</Navbar.Brand>
        < Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white border btn btn-outline-dark' disabled={location.pathname === '/'} >Home</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca per nome..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Cerca</Button>
          </Form>
        </Navbar.Collapse>
      </Container >
    </Navbar >
  );
}
