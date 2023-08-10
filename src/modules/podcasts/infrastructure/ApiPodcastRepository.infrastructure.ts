import { API_PODCASTS } from '../../../constants/api.constants'
import { INITIAL_PODCAST_RESPONSE } from '../../../constants/common.constants'
import { PodcastResponse } from '../domain/Podcast.domain'
import { PodcastRepository } from '../domain/PodcastRepository.domain'

export function createPodcastRepository(): PodcastRepository {
  async function get(): Promise<PodcastResponse> {
    try {
      const response = await fetch(API_PODCASTS)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error getting podcasts:', error)
      return INITIAL_PODCAST_RESPONSE
    }
  }

  return {
    get
  }
}
