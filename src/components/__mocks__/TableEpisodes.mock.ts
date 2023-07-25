import { EspisodeTransformed } from '../../types/episode.type'

export const TableEpisodesMockTrue: EspisodeTransformed[] = [
  {
    episodeUrl: 'https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=4',
    trackName: 'Episode 437 | "The Joe Budden Podcast"',
    trackId: 1553721768,
    releaseDate: null,
    trackTimeMillis: 0,
    description:
      'Joe, Rory, Mal and Parks return with episode 437 of The Joe Budden Podcast. The guys begin with recapping their Memorial Day Weekend (23:45), Joe addresses the recent controversy surrounding him (30:00), and Rory shares his thoughts on the situation (1:00:00). The guys also discuss the recent Verzuz between SWV and Xscape (1:26:00), new music from Lil Baby and Lil Durk (1:40:00), and much more! For more exclusive content: become a Patron of the The Joe Budden Podcast at www.patreon.com/JoeBudden'
  },
  {
    episodeUrl: 'https://podcasts.apple.com/us/podcast/60-songs-that-explain-the-90s/id1635211340?uo=4',
    trackName: 'Episode 436 | "The Joe Budden Podcast"',
    trackId: 1553721767,
    releaseDate: new Date('2021-05-26T11:00:00Z'),
    trackTimeMillis: 100000,
    description:
      'Joe, Rory, Mal and Parks return with episode 436 of The Joe Budden Podcast. The guys begin with recapping their weekend (23:45), Joe addresses the recent controversy surrounding him (30:00), and Rory shares his thoughts on the situation (1:00:00). The guys also discuss the recent Verzuz between SWV and Xscape (1:26:00), new music from Lil Baby and Lil Durk (1:40:00), and much more! For more exclusive content: become a Patron of the The Joe Budden Podcast at www.patreon.com/JoeBudden'
  }
]

export const TableEpisodesMockFalse: EspisodeTransformed[] = [
  {
    trackName: '',
    trackId: 1553721768,
    episodeUrl: '',
    releaseDate: null,
    trackTimeMillis: 0,
    description: ''
  }
]
