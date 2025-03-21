import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
  const [videoGames, setVideoGames] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  function fetchVideoGames() {
    setIsLoading(true)
    axios.
      get(`${import.meta.env.API_URL}/5`
        , {
          params: {
            search: search
          }
        })
      .then(res => {
        console.log('Dati ricevuti', res)
        setVideoGames(res.data)
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setIsLoading(false))
  };

  useEffect(() => {
    fetchVideoGames();
  }, []);

  console.log(videoGames)

  return (
    <GlobalContext.Provider value={{ videoGames, fetchVideoGames, isLoading, setIsLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

