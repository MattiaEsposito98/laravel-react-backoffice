
export default function Footer() {
  return (
    <footer className="text-light py-4 bg-secondary" id="footer">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Nome della tua Azienda. Tutti i diritti riservati.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-light">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-light">Termini di Servizio</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-light">Contatti</a>
          </li>
        </ul>
        <div className="social-icons mt-2">
          <a href="#" className="text-light me-2"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light me-2"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};