import { EspisodeTransformed } from '../../types/episode.type'

export const MockEpisode: EspisodeTransformed[] = [
  {
    trackName: 'Episode 1',
    trackId: 1,
    releaseDate: new Date('2023-07-01T00:00:00Z'),
    trackTimeMillis: 300000,
    description: 'Description of Episode 1'
  },
  {
    trackName: 'Episode 2',
    trackId: 2,
    releaseDate: new Date('2023-07-02T00:00:00Z'),
    trackTimeMillis: 240000,
    description: 'Description of Episode 2'
  },
  {
    trackName: 'Episode 3',
    trackId: 3,
    releaseDate: new Date('2023-07-03T00:00:00Z'),
    trackTimeMillis: 180000,
    description: 'Description of Episode 3'
  }
]
