import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [videoGames, setVideoGames] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchVideoGames();
  }, []);

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

  function searchVideoGames(query) {
    setSearch(query);
    if (!query) {
      setResults(videoGames); // Se non c'è ricerca, mostra tutti i videogiochi
      return;
    }

    axios
      .get(`${import.meta.env.VITE_API_URL}/search?query=${query}`)
      .then(res => {
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
