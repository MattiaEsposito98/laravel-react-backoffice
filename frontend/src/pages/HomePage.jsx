import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardCustom from "../components/CardCustom";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomePage() {
  const { results } = useContext(GlobalContext);
  const navigate = useNavigate()

  function home() {
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="row">
        {results.length > 0 ? (
          results.map((game) => (
            <div key={game.id} className="col-4 mt-2">
              <CardCustom game={game} />
            </div>
          ))
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center gap-3" style={{ height: '100vh' }}>
            <Button variant="dark" className="btn btn-outline-dark text-white" onClick={home}>Torna alla Home</Button>
            <p className="badge rounded text-bg-danger p-3">Nessun risultato trovato</p>
          </div>


        )
        }
      </div >
    </div >
  );
}
