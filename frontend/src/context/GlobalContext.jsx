import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [videoGames, setVideoGames] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVideoGames(); // Carica tutti i videogiochi all'inizio
  }, []);

  // Funzione per recuperare tutti i videogiochi
  function fetchVideoGames() {
    setIsLoading(true);
    axios.get(import.meta.env.VITE_API_URL)
      .then(res => {
        setVideoGames(res.data.data);
        setResults(res.data.data); // Imposta i risultati iniziali
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  // Funzione per cercare i videogiochi
  function searchVideoGames(query) {
    setSearch(query);
    if (!query) {
      setResults(videoGames); // Se non c'è ricerca, mostra tutti i videogiochi
      return;
    }

    // Effettua la chiamata API per cercare i videogiochi
    axios
      .get(`http://localhost:8000/api/videogames/search?query=${query}`)
      .then(res => {
        console.log(res)
        setResults(res.data); // Imposta i risultati della ricerca
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <GlobalContext.Provider value={{ videoGames, results, search, setSearch, searchVideoGames, isLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}
