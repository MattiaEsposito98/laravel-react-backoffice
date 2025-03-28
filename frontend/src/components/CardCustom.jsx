import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./CardCustom.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faXbox } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CardCustom({ game }) {
  const displayedConsoles = new Set(); // Per tenere traccia delle console già visualizzate
  if (!game) return null;

  return (
    <Card className={style.card}>
      <Card.Img
        variant="top"
        src={game.image ? `${import.meta.env.VITE_LARAVEL_API_URL}/storage/${game.image}` : './public/placeholder.png'}
        className={style.cardImg}
      />
      <Card.Body className={style.cardBody}>
        <div className="d-flex justify-content-between">
          <Card.Title className={style.cardTitle}>{game.title}</Card.Title>
          <Card.Text className={style.cardText}>{game.rating ? game.rating : 'N/A'}</Card.Text>
        </div>

        <Card.Subtitle className={style.cardSubtitle}>{game.genre}</Card.Subtitle>
        <Card.Text>
          {game.consoles && Array.isArray(game.consoles) && game.consoles.length > 0 ? (
            game.consoles.map((console) => {
              if (console.name.includes('Playstation')) {
                return <FontAwesomeIcon icon={faPlaystation} key={console.id} className="me-2 text-light" />;
              } else if (console.name.includes('Xbox')) {
                return <FontAwesomeIcon icon={faXbox} key={console.id} className="me-2 text-light" />;
              } else if (console.name === 'PC') {
                return <FontAwesomeIcon icon={faDesktop} key={console.id} className="me-2 text-light" />;
              } else if (console.name === 'Nintendo Switch') {
                return <FontAwesomeIcon icon={faGamepad} key={console.id} className="me-2 text-light" />;
              }
              return null;
            })
          ) : (
            <span>No consoles available</span>
          )}
        </Card.Text>

        <Link to={`/${game.id}`}>
          <Button variant="primary" className={style.btnPrimary}>Dettagli</Button>
        </Link>



      </Card.Body>
    </Card>
  );
}

export default CardCustom;
