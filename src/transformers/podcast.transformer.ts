import { Podcast } from '../types/podcast.type'

type Params = {
  podcasts: Podcast[] | undefined
}

export const transformPodcast = ({ podcasts }: Params): Podcast[] => {
  if (!podcasts) return []
  const newPodcasts: Podcast[] = podcasts.map(entry => ({
    id: entry.id,
    'im:name': entry['im:name'],
    'im:image': entry['im:image'],
    'im:artist': entry['im:artist'],
    summary: entry.summary
  }))

  return newPodcasts
}
