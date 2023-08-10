export interface PodcastResponse {
  feed: Feed
}

export interface Feed {
  author: Author
  entry: Podcast[]
  updated: Updated
  rights: Rights2
  title: Title2
  icon: Icon
  link: Link2[]
  id: Id2
}

export interface Author {
  name: Name
  uri: Uri
}

export interface Name {
  label: string
}

export interface Uri {
  label: string
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

export interface ImName {
  label: string
}

export interface ImImage {
  label: string
  attributes: Attributes
}

export interface Attributes {
  height: string
}

export interface Summary {
  label: string
}

export interface ImPrice {
  label: string
  attributes: Attributes2
}

export interface Attributes2 {
  amount: string
  currency: string
}

export interface ImContentType {
  attributes: Attributes3
}

export interface Attributes3 {
  term: string
  label: string
}

export interface Rights {
  label: string
}

export interface Title {
  label: string
}

export interface Link {
  attributes: Attributes4
}

export interface Attributes4 {
  rel: string
  type: string
  href: string
}

export interface Id {
  label: string
  attributes: Attributes5
}

export interface Attributes5 {
  'im:id': string
}

export interface ImArtist {
  label: string
  attributes?: Attributes6
}

export interface Attributes6 {
  href: string
}

export interface Category {
  attributes: Attributes7
}

export interface Attributes7 {
  'im:id': string
  term: string
  scheme: string
  label: string
}

export interface ImReleaseDate {
  label: string
  attributes: Attributes8
}

export interface Attributes8 {
  label: string
}

export interface Updated {
  label: string
}

export interface Rights2 {
  label: string
}

export interface Title2 {
  label: string
}

export interface Icon {
  label: string
}

export interface Link2 {
  attributes: Attributes9
}

export interface Attributes9 {
  rel: string
  type?: string
  href: string
}

export interface Id2 {
  label: string
}
