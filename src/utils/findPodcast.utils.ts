import { PodcastResponseTransformed } from '../types/podcast.type'

type Params = {
  podcasts: PodcastResponseTransformed[] | undefined
  podcastId: string
}

export const findPodcast = ({ podcasts, podcastId }: Params): PodcastResponseTransformed | undefined => {
  if (!podcasts || !podcastId) return undefined

  return podcasts.find(podcast => podcast.id === podcastId)
}
