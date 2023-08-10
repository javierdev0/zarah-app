import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'
import { isTimeExpired } from '../utils/timeExpired.utils'
import { EpisodeResponseTransformed } from '../types/episode.type'
import { getEpisodesFromAPI } from '../modules/episodes/application/get.application'
import { createEpisodeRepository } from '../modules/episodes/infrastructure/ApiEpisodeRepository.infrastucture'

type Params = {
  podcastId: string
}

const useEpisodes = ({ podcastId }: Params) => {
  const episodeRepository = createEpisodeRepository()

  const initialValue: EpisodeResponseTransformed = {
    resultCount: 0,
    results: []
  }
  const [episodes, setEpisodes] = useState<EpisodeResponseTransformed>(initialValue)
  const [loading, setLoading] = useState(false)
  const { valueStored, setLocalStorage, expiration } = useLocalStorage<EpisodeResponseTransformed>(
    `episode ${podcastId || ''}`,
    initialValue
  )

  const getEpisodes = async () => {
    const isExpired = isTimeExpired({ time: expiration })

    if (isExpired) {
      setLoading(true)
      const response = await getEpisodesFromAPI(episodeRepository)({ podcastId })

      setEpisodes(response)
      setLocalStorage(response)
      setLoading(false)

      return
    }

    setEpisodes(valueStored)
  }

  useEffect(() => {
    getEpisodes()
  }, [valueStored])

  return { episodes: episodes.results, resultCount: episodes.resultCount, isLoading: loading }
}

export default useEpisodes
