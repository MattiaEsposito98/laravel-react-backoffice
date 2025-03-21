import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCustom({ game }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={game.image} />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Subtitle>
          {game.genre}
        </Card.Subtitle>
        <Card.Text>{game.rating}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCustom;