export interface EpisodeResponseTransformed {
  resultCount: number
  results: EspisodeTransformed[]
}

export interface EspisodeTransformed {
  trackName: string
  trackId: number
  releaseDate: Date | null
  trackTimeMillis: number
  description: string
  episodeUrl?: string
}
