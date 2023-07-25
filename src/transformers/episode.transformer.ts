import { Episode, EspisodeTransformed } from '../types/episode.type'

type Params = {
  episodes: Episode[] | undefined
}

export const transformEpisode = ({ episodes }: Params): EspisodeTransformed[] => {
  if (!episodes) return []
  const newEpisodes: EspisodeTransformed[] = episodes.map(entry => ({
    trackName: entry.trackName,
    trackId: entry.trackId,
    releaseDate: new Date(entry.releaseDate),
    trackTimeMillis: entry.trackTimeMillis,
    description: entry.description || '',
    episodeUrl: entry.episodeUrl || ''
  }))

  return newEpisodes
}
