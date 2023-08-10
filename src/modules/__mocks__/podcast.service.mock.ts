import { PodcastResponseTransformed } from '../../types/podcast.type'
import { PodcastResponse } from '../podcasts/domain/Podcast.domain'

export const podcastsServiceMockTrue: PodcastResponse = {
  feed: {
    entry: [
      {
        'im:name': {
          label: 'The Joe Budden Podcast'
        },
        'im:price': {
          label: '$0.00',
          attributes: {
            currency: 'USD',
            amount: '0.00000'
          }
        },
        'im:contentType': {
          attributes: {
            term: 'Audio',
            label: 'Audio Podcast'
          }
        },
        title: {
          label: 'The Joe Budden Podcast with Rory & Mal'
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2'
          }
        },
        category: {
          attributes: {
            'im:id': '1303',
            term: 'Music',
            scheme: 'https://itunes.apple.com/us/genre/podcasts-music/id1303?uo=2',
            label: 'Music'
          }
        },
        'im:releaseDate': {
          label: '2021-01-13T03:00:00-07:00',
          attributes: {
            label: 'January 13, 2021'
          }
        },
        'im:image': [
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
            attributes: {
              height: '55'
            }
          },
          {
            label:
              'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
            attributes: {
              height: '60'
            }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
            attributes: {
              height: '170'
            }
          }
        ],
        summary: {
          label: 'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.'
        },
        id: {
          label: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          attributes: {
            'im:id': '1535809341'
          }
        },
        'im:artist': {
          label: 'The Joe Budden Network',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2'
          }
        }
      }
    ],
    updated: {
      label: '2021-01-13T03:00:00-07:00'
    },
    rights: {
      label: '℗ & © 2021 The Joe Budden Network'
    },
    title: {
      label: 'The Joe Budden Podcast with Rory & Mal - The Joe Budden Network'
    },
    icon: {
      label: 'http://itunes.apple.com/favicon.ico'
    },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href: 'https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=1535809341&uo=2'
        }
      }
    ],
    id: {
      label: 'https://itunes.apple.com/us/genre/podcasts-music/id1303?uo=2'
    },
    author: {
      name: {
        label: 'The Joe Budden Network'
      },
      uri: {
        label: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2'
      }
    }
  }
}

export const podcastsServiceMockTransformed: PodcastResponseTransformed[] = [
  {
    id: '1535809341',
    title: 'The Joe Budden Podcast',
    artist: 'The Joe Budden Network',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
    summary: 'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.'
  }
]

export const podcastsServiceMockFalse = [
  {
    'im:name': {
      label: 'The Joe Budden Podcast'
    }
  }
]
