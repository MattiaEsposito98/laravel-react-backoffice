import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary text-center text-lg-start mt-auto">
      <Container className="p-2">
        <Row className="d-flex justify-content-between">
          <Col lg={4} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-center">Chi Siamo</h5>
            <p className="fw-bold">
              Siamo un'azienda dedicata a fornire i migliori servizi e prodotti ai nostri clienti.
            </p>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase">Link Utili</h5>
            <Nav className="flex-column">
              <Nav.Link className="text-dark underline-text fw-bold" disabled href="#">Home</Nav.Link>
              <Nav.Link className="text-dark underline-text fw-bold" href="#">Contatti</Nav.Link>
            </Nav>
          </Col>
          <Col lg={4} md={6} className="mb-4 mb-md-0 text-end">
            <h5 className="text-uppercase me-5">Seguici</h5>
            <Nav className="d-flex justify-content-end">
              <Nav.Link href="#" className="text-dark">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                <FaTwitter />
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                <FaInstagram />
              </Nav.Link>
            </Nav>
          </Col>


        </Row>
      </Container>
      <div className="text-center p-3 bg-dark text-light">
        © {new Date().getFullYear()} La Tua Azienda. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
