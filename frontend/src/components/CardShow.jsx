import Accordion from 'react-bootstrap/Accordion';
import style from './CardShow.module.css'

function CardShow({ videoGame }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className={style.customAccordionHeader} >Descrizione</Accordion.Header>
        <Accordion.Body className={style.accordionBody}>
          {videoGame.description}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className={style.customAccordionHeader}>Piattaforme disponibili</Accordion.Header>
        <Accordion.Body className={style.accordionBody} >
          {videoGame.consoles.map(console => console.name).join(', ')}

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

export default CardShow;