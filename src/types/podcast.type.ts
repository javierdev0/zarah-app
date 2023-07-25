export interface PodcastResponse {
  feed: Feed
}

interface Feed {
  entry: Podcast[]
}

export interface Podcast {
  'im:name': ImName
  'im:image': ImImage[]
  summary: Summary
  id: Id
  'im:artist': ImArtist
}

interface ImName {
  label: string
}

interface ImImage {
  label: string
  attributes: Attributes
}

interface Attributes {
  height: string
}

interface Summary {
  label: string
}

interface Id {
  label: string
  attributes: IdAttributes
}

interface IdAttributes {
  'im:id': string
}

interface ImArtist {
  label: string
  attributes?: ArtistAttributes
}

interface ArtistAttributes {
  href: string
}
