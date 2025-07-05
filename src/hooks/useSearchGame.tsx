import { useEffect, useState } from 'react'
import { Game } from '../model/game'
import getSearchGame from '../services/getSearchGame'

export default function useSearchGames(page: string, terme: string) {
  const [games, setGames] = useState<Game[] | null>(null)

  useEffect(() => {
    const fetchGames = async () => {
        const data = await getSearchGame(page, terme)
        setGames(data)
    }

    fetchGames()
  }, [page])

  return games
}
