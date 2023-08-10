import { useEffect, useState } from 'react'

import useLocalStorage from './useLocalStorage'
import { isTimeExpired } from '../utils/timeExpired.utils'
import { PodcastResponseTransformed } from '../types/podcast.type'
import { getPodcastsFromAPI } from '../modules/podcasts/application/get.application'
import { createPodcastRepository } from '../modules/podcasts/infrastructure/ApiPodcastRepository.infrastructure'

const usePodcasts = () => {
  const podcastRepository = createPodcastRepository()
  const [podcasts, setPodcasts] = useState<PodcastResponseTransformed[]>([])
  const [loading, setLoading] = useState(false)
  const { valueStored, setLocalStorage, expiration } = useLocalStorage<PodcastResponseTransformed[]>('podcasts', [])

  const getPodcasts = async () => {
    const isExpired = isTimeExpired({ time: expiration })
    if (isExpired) {
      setLoading(true)
      const response = await getPodcastsFromAPI(podcastRepository)()
      setPodcasts(response)
      setLocalStorage(response)
      setLoading(false)
      return
    }

    setPodcasts(valueStored)
  }

  useEffect(() => {
    getPodcasts()
  }, [valueStored])

  return { podcasts, isLoading: loading }
}

export default usePodcasts
