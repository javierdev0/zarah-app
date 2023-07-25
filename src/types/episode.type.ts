export interface EpisodeResponse {
  resultCount: number
  results: Episode[]
}

export interface EpisodeResponseTransformed {
  resultCount: number
  results: EspisodeTransformed[]
}

export interface Episode {
  artistIds?: string[]
  artistName?: string
  artworkUrl100?: string
  artworkUrl160?: string
  artworkUrl30?: string
  artworkUrl60: string
  artworkUrl600: string
  closedCaptioning?: string
  collectionCensoredName?: string
  collectionExplicitness?: string
  collectionHdPrice?: number
  collectionId: number
  collectionName: string
  collectionPrice?: number
  collectionViewUrl: string
  contentAdvisoryRating?: string
  country: string
  currency?: string
  description?: string
  episodeContentType?: string
  episodeFileExtension?: string
  episodeGuid?: string
  episodeUrl?: string
  feedUrl: string
  genreIds?: string[]
  genres?: string[] | Genre[]
  kind: string
  previewUrl?: string
  primaryGenreName?: string
  releaseDate: string
  shortDescription?: string
  trackCensoredName?: string
  trackCount?: number
  trackExplicitness?: string
  trackId: number
  trackName: string
  trackPrice?: number
  trackTimeMillis: number
  trackViewUrl: string
  wrapperType: string
}

export interface Genre {
  name: string
  id: string
}

export interface EspisodeTransformed {
  trackName: string
  trackId: number
  releaseDate: Date | null
  trackTimeMillis: number
  description: string
  episodeUrl?: string
}
