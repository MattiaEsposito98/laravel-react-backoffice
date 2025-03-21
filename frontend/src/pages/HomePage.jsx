import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import CardCustom from "../components/CardCustom"

export default function HomePage() {
  const { videoGames } = useContext(GlobalContext)
  return (
    <>
      <div className="container">
        <div className="row">

          {videoGames.map((game => (
            <div key={game.id} className="col-4 mt-2 ">
              <CardCustom game={game} />
            </div>
          )))}

        </div>
      </div>

    </>

  )
}