import { Podcast } from '../../types/podcast.type'

export const podcastsServiceMockTrue: Podcast[] = [
  {
    'im:name': {
      label: 'The Joe Budden Podcast'
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
]

export const podcastsServiceMockFalse = [
  {
    'im:name': {
      label: 'The Joe Budden Podcast'
    }
  }
]
