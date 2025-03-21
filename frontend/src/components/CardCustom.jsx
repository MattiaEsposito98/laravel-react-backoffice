import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./CardCustom.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faXbox } from '@fortawesome/free-brands-svg-icons';

function CardCustom({ game }) {
  const displayedConsoles = new Set(); // Per tenere traccia delle console già visualizzate

  return (
    <Card className={style.card}>
      <Card.Img
        variant="top"
        src={game.image ? `http://127.0.0.1:8000/${game.image}` : './public/placeholder.png'}
        className={style.cardImg}
      />
      <Card.Body className={style.cardBody}>
        <div className="d-flex justify-content-between">
          <Card.Title className={style.cardTitle}>{game.title}</Card.Title>
          <Card.Text className={style.cardText}>{game.rating ? game.rating : 'N/A'}</Card.Text>
        </div>

        <Card.Subtitle className={style.cardSubtitle}>{game.genre}</Card.Subtitle>
        <Card.Text>
          {game.consoles.map((console) => {
            // Controlla se la console è già stata visualizzata
            if (console.name.includes('Playstation') && !displayedConsoles.has('Playstation')) {
              displayedConsoles.add('Playstation'); // Aggiungi a Set
              return <FontAwesomeIcon icon={faPlaystation} key={console.id} className="me-2" />;
            } else if (console.name.includes('Xbox') && !displayedConsoles.has('Xbox')) {
              displayedConsoles.add('Xbox'); // Aggiungi a Set
              return <FontAwesomeIcon icon={faXbox} key={console.id} className="me-2" />;
            } else if (console.name === 'PC' && !displayedConsoles.has('PC')) {
              displayedConsoles.add('PC'); // Aggiungi a Set
              return <FontAwesomeIcon icon={faDesktop} key={console.id} className="me-2" />;
            }
            return null;
          })}
        </Card.Text>
        <Button variant="primary" className={style.btnPrimary}>Dettagli</Button>



      </Card.Body>
    </Card>
  );
}

export default CardCustom;
