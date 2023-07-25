import { API_PODCASTS } from '../constants/api.constants'
import { transformPodcast } from '../transformers/podcast.transformer'
import { Podcast } from '../types/podcast.type'

export const getPodcastsFromAPI = async (): Promise<Podcast[]> => {
  try {
    const response = await fetch(API_PODCASTS)
    const json = await response.json()
    const podcasts: Podcast[] = json.feed.entry
    const podcastsTransformed = transformPodcast({ podcasts })
    return podcastsTransformed
  } catch (error) {
    console.error('Error getting podcasts:', error)
    return []
  }
}
