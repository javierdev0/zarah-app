import { EpisodeResponse } from './Episode.domain'

export interface EpisodeRepository {
  get: ({ podcastId }: { podcastId: string }) => Promise<EpisodeResponse>
}
