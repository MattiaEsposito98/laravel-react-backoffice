import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import CardCustom from "../components/CardCustom"

export default function HomePage() {
  const { videoGames, search, setSearch } = useContext(GlobalContext)
  return (
    <>
      <div className="container">
        {videoGames.map((game => (
          <CardCustom key={game.id} game={game} />
        )))}
      </div>
    </>

  )
}