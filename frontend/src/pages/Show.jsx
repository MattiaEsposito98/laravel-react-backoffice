import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import Loader from "../components/Loader"
import CardShow from '../components/CardShow'
import Badges from "../components/Badges"

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
    return <div><Loader /></div>;
  }

  return (
    <>
      <div className="container ">
        <article className="position-relative">
          <img
            src={videoGame.image ? `${import.meta.env.VITE_LARAVEL_API_URL}/${videoGame.image}` : '/placeholder.png'}
            alt={videoGame.title}
            className="card-img-top img-fluid object-fit-fill mt-2 rounded animate__animated animate__backInDown"
            style={{ height: '500px' }}
          />
          <Badges videoGame={videoGame} />
        </article>

        {/* CardShow con animazione BackInUp */}
        <div className="animate__animated animate__backInUp">
          <CardShow videoGame={videoGame} />
        </div>
      </div>
    </>
  )
}