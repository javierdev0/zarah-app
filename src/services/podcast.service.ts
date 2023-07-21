import { API_PODCASTS } from '../constants/api.constants'
import { Podcast } from '../types/podcast.type'

export const getPodcasts = async (): Promise<Podcast[]> => {
  try {
    const response = await fetch(API_PODCASTS)
    const json = await response.json()
    const podcasts = json.feed.entry
    return podcasts
  } catch (error) {
    console.error('Error getting podcasts:', error)
    return []
  }
}
