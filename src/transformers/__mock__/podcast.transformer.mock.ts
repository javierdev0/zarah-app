import { PodcastResponseTransformed } from '../../types/podcast.type'

export const MockPodcastForTransform = [
  {
    'im:name': {
      label: 'Million Dollaz Worth Of Game'
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/55x55bb.png',
        attributes: {
          height: '55'
        }
      },
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/60x60bb.png',
        attributes: {
          height: '60'
        }
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
        attributes: {
          height: '170'
        }
      }
    ],
    summary: {
      label:
        'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame'
    },
    'im:price': {
      label: 'Get',
      attributes: {
        amount: '0',
        currency: 'USD'
      }
    },
    'im:contentType': {
      attributes: {
        term: 'Podcast',
        label: 'Podcast'
      }
    },
    rights: {
      label: '© 2023 Barstool Sports, Inc.'
    },
    title: {
      label: 'Million Dollaz Worth Of Game - Barstool Sports'
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2'
      }
    },
    id: {
      label: 'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2',
      attributes: {
        'im:id': '1460157002'
      }
    },
    'im:artist': {
      label: 'Barstool Sports',
      attributes: {
        href: 'https://podcasts.apple.com/us/artist/barstool-sports/1524874689?uo=2'
      }
    },
    category: {
      attributes: {
        'im:id': '1523',
        term: 'Music Commentary',
        scheme: 'https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2',
        label: 'Music Commentary'
      }
    },
    'im:releaseDate': {
      label: '2023-07-16T16:30:00-07:00',
      attributes: {
        label: 'July 16, 2023'
      }
    }
  }
]

export const MockPodcastTransformed: PodcastResponseTransformed[] = [
  {
    id: '1460157002',

    title: 'Million Dollaz Worth Of Game',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
    artist: 'Barstool Sports',
    summary:
      'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n' +
      '\n' +
      'You can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame'
  }
]
