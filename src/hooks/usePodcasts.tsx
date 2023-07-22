import { useEffect, useState } from 'react'
import { Podcast } from '../types/podcast.type'
import { getPodcastsFromAPI } from '../services/podcast.service'
import useLocalStorage from './useLocalStorage'
import { isTimeExpired } from '../utils/timeExpired.utils'

const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const { valueStored, setLocalStorage, expiration } = useLocalStorage<Podcast[]>('podcasts', [])

  const getPodcasts = async () => {
    const isExpired = isTimeExpired(expiration)
    if (isExpired) {
      const response = await getPodcastsFromAPI()
      setPodcasts(response)
      setLocalStorage(response)
      return
    }

    setPodcasts(valueStored)
  }

  useEffect(() => {
    getPodcasts()
  }, [])

  return { podcasts }
}

export default usePodcasts
