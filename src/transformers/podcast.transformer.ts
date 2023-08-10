import { Podcast } from '../modules/podcasts/domain/Podcast.domain'
import { PodcastResponseTransformed } from '../types/podcast.type'

type Params = {
  podcasts: Podcast[] | undefined
}

export const transformPodcast = ({ podcasts }: Params): PodcastResponseTransformed[] => {
  if (!podcasts || !Array.isArray(podcasts)) return []
  const newPodcasts: PodcastResponseTransformed[] = podcasts.map(entry => ({
    id: entry.id?.attributes['im:id'],
    title: entry['im:name']?.label,
    image: entry['im:image']?.[2]?.label,
    artist: entry['im:artist']?.label,
    summary: entry.summary?.label
  }))

  return newPodcasts
}
