import { API_CORS, API_EPISODES } from '../constants/api.constants'
import { transformEpisode } from '../transformers/episode.transformer'
import { EpisodeResponseTransformed } from '../types/episode.type'

type Params = {
  podcastId: string
}

export const getEpisodesFromAPI = async ({ podcastId }: Params): Promise<EpisodeResponseTransformed> => {
  const params = new URLSearchParams({
    id: podcastId,
    entity: 'podcastEpisode',
    media: 'podcast'
  })

  const url = `${API_CORS}${encodeURIComponent(`${API_EPISODES}?${params}`)}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    const { results: episodes, resultCount } = JSON.parse(json.contents)
    const episodesTransformed = transformEpisode({ episodes })
    return { results: episodesTransformed, resultCount }
  } catch (error) {
    console.error('Error getting episodes:', error)
    return { results: [], resultCount: 0 }
  }
}
