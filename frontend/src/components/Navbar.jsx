// Navbar.jsx
import { useContext } from 'react';
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

export default function CustomNavbar() {
  const { search, setSearch, searchVideoGames } = useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchVideoGames(search);
  }

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-white border rounded p-2 fw-bold">
          VideoGames
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Button
              variant="outline-dark"
              className="text-white border"
              disabled={location.pathname === '/'}
              onClick={() => navigate(`/`)}
            >
              Home
            </Button>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Cerca per nome..."
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={handleChange}
            />
            <Button type="submit" variant="dark">
              Cerca
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
