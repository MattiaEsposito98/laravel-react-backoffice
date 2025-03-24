// HomePage.jsx
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CardCustom from "../components/CardCustom";

export default function HomePage() {
  const { results } = useContext(GlobalContext);

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
          <p>No results found. Please search for a game.</p>
        )}
      </div>
    </div>
  );
}
