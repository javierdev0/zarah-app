import { transformPodcast } from '../../../transformers/podcast.transformer'
import { PodcastResponseTransformed } from '../../../types/podcast.type'
import { PodcastRepository } from '../domain/PodcastRepository.domain'

export function getPodcastsFromAPI(podcastRepository: PodcastRepository) {
  return async (): Promise<PodcastResponseTransformed[]> => {
    const {
      feed: { entry }
    } = await podcastRepository.get()

    const podcastsTransformed = transformPodcast({ podcasts: entry })

    return podcastsTransformed
  }
}
