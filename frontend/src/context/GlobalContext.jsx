import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
  const [videoGames, setVideoGames] = useState([])

  function fetchVideoGames() {
    axios.
      get(`import.meta.env.API_URL`)
      .then(res => {
        console.log('Dati ricevuti', res)
        setVideoGames(res.data.data)
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchVideoGames();
  }, []);

  console.log(videoGames)

  return (
    <GlobalContext.Provider value={{ videoGames, fetchVideoGames }}>
      {children}
    </GlobalContext.Provider>
  );
};

