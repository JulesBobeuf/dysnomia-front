import { useEffect, useState } from 'react'
import { Game } from '../model/game'
import getTopGameListe from '../services/getTopGameListe'

export default function useTopGamesList(page: string, terme: string | null) {
  const [games, setGames] = useState<Game[] | null>(null)

  useEffect(() => {
  const fetchGames = async () => {
    const result = await getTopGameListe(page, terme)
    setGames(result)
  }
  fetchGames()
}, [page, terme])

  return games
}
