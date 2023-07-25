import { Podcast } from '../types/podcast.type'

type Params = {
  podcasts: Podcast[] | undefined
  podcastId: string
}

export const findPodcast = ({ podcasts, podcastId }: Params): Podcast | undefined => {
  if (!podcasts || !podcastId) return undefined

  return podcasts.find(podcast => podcast.id.attributes['im:id'] === podcastId)
}
