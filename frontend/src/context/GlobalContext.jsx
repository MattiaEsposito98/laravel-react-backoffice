import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
  const [videoGames, setVideoGames] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  function fetchVideoGames() {
    setIsLoading(true);
    const params = search ? { search } : {};
    axios.get(import.meta.env.VITE_API_URL, { params })
      .then(res => {
        setVideoGames(res.data.data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }


  useEffect(() => {
    fetchVideoGames();
  }, []);

  return (
    <GlobalContext.Provider value={{ videoGames, fetchVideoGames, isLoading, setIsLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

