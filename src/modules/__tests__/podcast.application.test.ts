import * as transformPodcast from '../../transformers/podcast.transformer'
import {
  podcastsServiceMockFalse,
  podcastsServiceMockTransformed,
  podcastsServiceMockTrue
} from '../__mocks__/podcast.service.mock'
import { getPodcastsFromAPI } from '../podcasts/application/get.application'
import { createPodcastRepository } from '../podcasts/infrastructure/ApiPodcastRepository.infrastructure'

describe('Service: getPodcasts', () => {
  const podcastRepository = createPodcastRepository()

  it('should call function with correct api', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: podcastsServiceMockTrue } })
    })
    await getPodcastsFromAPI(podcastRepository)()
    expect(global.fetch).toHaveBeenCalledWith('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
  })

  it('should return empty array if api fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.reject({ feed: { entry: podcastsServiceMockTrue } })
    })
    const podcasts = await getPodcastsFromAPI(podcastRepository)()

    expect(podcasts).toEqual([])
  })

  it('should return empty array if api returns empty array', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: [] } })
    })
    const podcasts = await getPodcastsFromAPI(podcastRepository)()

    expect(podcasts).toEqual([])
  })

  it('should return empty array if api returns undefined', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: undefined } })
    })
    const podcasts = await getPodcastsFromAPI(podcastRepository)()

    expect(podcasts).toEqual([])
  })

  it('should get podcasts from api (mock true)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(podcastsServiceMockTrue)
    })
    const podcasts = await getPodcastsFromAPI(podcastRepository)()

    expect(podcasts).toEqual(podcastsServiceMockTransformed)
  })

  it('should not get podcasts from api (mock false)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: podcastsServiceMockFalse } })
    })
    const podcasts = await getPodcastsFromAPI(podcastRepository)()

    expect(podcasts).not.toEqual(podcastsServiceMockTrue)
  })

  it('should call transformPodcast with correct params', async () => {
    const transformPodcastMock = jest.spyOn(transformPodcast, 'transformPodcast')

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: podcastsServiceMockTrue } })
    })
    await getPodcastsFromAPI(podcastRepository)()
    expect(transformPodcastMock).toHaveBeenCalledWith({ podcasts: podcastsServiceMockTrue })
  })
})
