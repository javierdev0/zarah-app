import { useEffect, useState } from 'react'
import { Podcast } from '../types/podcast.type'
import { getPodcastsFromAPI } from '../services/podcast.service'
import useLocalStorage from './useLocalStorage'
import { isTimeExpired } from '../utils/timeExpired.utils'

const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const [loading, setLoading] = useState(false)
  const { valueStored, setLocalStorage, expiration } = useLocalStorage<Podcast[]>('podcasts', [])

  const getPodcasts = async () => {
    const isExpired = isTimeExpired({ time: expiration })
    if (isExpired) {
      setLoading(true)
      const response = await getPodcastsFromAPI()
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
