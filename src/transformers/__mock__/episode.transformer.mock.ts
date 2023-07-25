import { Episode, EspisodeTransformed } from '../../types/episode.type'

export const MockEpisodeFormTransform: Episode[] = [
  {
    artworkUrl30:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/30x30bb.jpg',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/60x60bb.jpg',
    artworkUrl100:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/100x100bb.jpg',
    artworkUrl600:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f4/53/be/f453be7f-2a34-0617-7bc1-bc57d9b747fc/mza_6548891788110664288.jpg/600x600bb.jpg',
    collectionCensoredName: "60 Songs That Explain the '90s",
    collectionExplicitness: 'notExplicit',
    description: 'A podcast about the 90s by The Ringer',
    collectionHdPrice: 0,
    collectionId: 1635211340,
    collectionName: "60 Songs That Explain the '90s",
    collectionPrice: 0,
    collectionViewUrl: 'https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=4',
    country: 'USA',
    currency: 'USD',
    feedUrl: 'https://feeds.megaphone.fm/60-songs',
    genreIds: ['1310', '26'],
    kind: 'podcast',
    primaryGenreName: 'Music',
    releaseDate: '2023-07-19T07:00:00Z',
    trackCensoredName: "60 Songs That Explain the '90s",
    trackCount: 102,
    trackExplicitness: 'notExplicit',
    trackId: 1635211340,
    trackName: "60 Songs That Explain the '90s",
    trackPrice: 0,
    trackTimeMillis: 5296,
    trackViewUrl: 'https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=4',
    wrapperType: 'track'
  }
]

export const MockEpisodeTransformed: EspisodeTransformed[] = [
  {
    trackName: "60 Songs That Explain the '90s",
    trackId: 1635211340,
    releaseDate: new Date('2023-07-19T07:00:00Z'),
    trackTimeMillis: 5296,
    description: 'A podcast about the 90s by The Ringer',
    episodeUrl: ''
  }
]
