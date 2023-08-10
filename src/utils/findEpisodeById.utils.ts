import { EspisodeTransformed } from '../types/episode.type'

type Params = {
  episodeId: number | undefined
  episodes: EspisodeTransformed[] | undefined
}

export const findEpisodeById = ({ episodeId, episodes }: Params): EspisodeTransformed | undefined => {
  if (!episodes || !episodeId) return undefined

  return episodes.find(episode => episode.trackId === episodeId)
}
