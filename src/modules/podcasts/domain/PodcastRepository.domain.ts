import { PodcastResponse } from './Podcast.domain'

export interface PodcastRepository {
  get: () => Promise<PodcastResponse>
}
