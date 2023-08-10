import { transformEpisode } from '../../../transformers/episode.transformer'
import { EpisodeResponseTransformed } from '../../../types/episode.type'
import { EpisodeRepository } from '../domain/EpisodeRepository.domain'

export function getEpisodesFromAPI(episodeRepository: EpisodeRepository) {
  return async ({ podcastId }: { podcastId: string }): Promise<EpisodeResponseTransformed> => {
    const { results, resultCount } = await episodeRepository.get({ podcastId })

    const episodesTransformed = transformEpisode({ episodes: results })

    return { results: episodesTransformed, resultCount }
  }
}
