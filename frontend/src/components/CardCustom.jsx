import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./CardCustom.module.css";

function CardCustom({ game }) {
  console.log(game.image)
  return (
    <Card className={style.card}>
      <Card.Img variant="top" src={game.image ? `http://127.0.0.1:8000/${game.image}` : './public/placeholder.png'} className={style.cardImg} />
      <Card.Body className={style.cardBody}>
        <Card.Title className={style.cardTitle}>{game.title}</Card.Title>
        <Card.Subtitle className={style.cardSubtitle}>{game.genre}</Card.Subtitle>
        <Card.Text className={style.cardText}>{game.rating}</Card.Text>
        <Button variant="primary" className={style.btnPrimary}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCustom;
