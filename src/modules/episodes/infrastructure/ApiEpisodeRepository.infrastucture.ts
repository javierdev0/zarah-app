import { API_CORS, API_EPISODES } from '../../../constants/api.constants'
import { EpisodeResponse } from '../domain/Episode.domain'
import { EpisodeRepository } from '../domain/EpisodeRepository.domain'

export function createEpisodeRepository(): EpisodeRepository {
  async function get({ podcastId }: { podcastId: string }): Promise<EpisodeResponse> {
    const params = new URLSearchParams({
      id: podcastId,
      entity: 'podcastEpisode',
      media: 'podcast'
    })

    const url = `${API_CORS}${encodeURIComponent(`${API_EPISODES}?${params}`)}`

    try {
      const response = await fetch(url)
      const json = await response.json()
      const data = JSON.parse(json.contents)

      return data
    } catch (error) {
      console.error('Error getting episodes:', error)

      return { results: [], resultCount: 0 }
    }
  }

  return {
    get
  }
}
