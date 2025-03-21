import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"

export default function Show() {

  const { id } = useParams()
  const { videoGames, loading, isLoading, setIsLoading } = useContext(GlobalContext)
  const [videoGame, setVideoGame] = useState(null)

  function fetchVideoGame() {
    setIsLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then(res => {
        console.log(res);
        setVideoGame(res.data.data);
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }


  useEffect(() => {
    fetchVideoGame()
  }, [id])


  if (!videoGame) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <h1>show</h1>
        <p>{videoGame.title}</p>
      </div>
    </>
  )
}