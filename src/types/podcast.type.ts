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
  'im:price': ImPrice
  'im:contentType': ImContentType
  rights?: Rights
  title: Title
  link: Link
  id: Id
  'im:artist': ImArtist
  category: Category
  'im:releaseDate': ImReleaseDate
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

interface ImPrice {
  label: string
  attributes: Attributes2
}

interface Attributes2 {
  amount: string
  currency: string
}

interface ImContentType {
  attributes: Attributes3
}

interface Attributes3 {
  term: string
  label: string
}

interface Rights {
  label: string
}

interface Title {
  label: string
}

interface Link {
  attributes: LinkAttributes
}

interface LinkAttributes {
  rel: string
  type: string
  href: string
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

interface Category {
  attributes: CategoryAttributes
}

interface CategoryAttributes {
  'im:id': string
  term: string
  scheme: string
  label: string
}

interface ImReleaseDate {
  label: string
  attributes: ImReleaseAttributes
}

interface ImReleaseAttributes {
  label: string
}
