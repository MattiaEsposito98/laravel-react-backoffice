import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";

export default function Badges({ videoGame }) {
  const genre = videoGame.genre || "Sconosciuto";
  const rating = videoGame.rating || "N/A";
  const [time, setTime] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="position relative">
      {time && (
        <>
          <Badge bg="success" className="position-absolute bottom-0 start-0 p-3 fw-bold fs-5 ">
            {genre}
          </Badge>
          <Badge bg="danger" id='rating'>
            {rating}
          </Badge>

        </>
      )
      }
    </div>
  )
}

