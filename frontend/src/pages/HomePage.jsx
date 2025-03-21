import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function HomePage() {
  const { videoGames, search, setSearch } = useContext(GlobalContext)
  return (
    <ul>
      {videoGames.map(game => {
        <li key={game.id}>{game}</li>
      })}
    </ul>
  )
}