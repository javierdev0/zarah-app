import { PodcastResponse } from '../modules/podcasts/domain/Podcast.domain'

export const TIME_EXPIRATION_PODCASTS_MS = 1000 * 60 * 60 * 24

export const INITIAL_PODCAST_RESPONSE: PodcastResponse = {
  feed: {
    author: {
      name: {
        label: ''
      },
      uri: {
        label: ''
      }
    },
    entry: [],
    updated: {
      label: ''
    },
    rights: {
      label: ''
    },
    title: {
      label: ''
    },
    icon: {
      label: ''
    },
    link: [],
    id: {
      label: ''
    }
  }
}
