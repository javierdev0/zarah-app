import { MockEpisodeFormTransform } from '../../transformers/__mock__/episode.transformer.mock'
import { EpisodeServiceMock, ResponseServiceTransformed } from '../__mocks__/episode.service.mock'
import * as episodeTransformer from '../../transformers/episode.transformer'
import { createEpisodeRepository } from '../episodes/infrastructure/ApiEpisodeRepository.infrastucture'
import { getEpisodesFromAPI } from '../episodes/application/get.application'

describe('Service: getEpisodes', () => {
  const podcastId = '1635211340'
  const episodeRepository = createEpisodeRepository()

  it('should call function with correct api', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: EpisodeServiceMock } })
    })
    await getEpisodesFromAPI(episodeRepository)({ podcastId })
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.allorigins.win/get?url=https%3A%2F%2Fitunes.apple.com%2Flookup%3Fid%3D${podcastId}%26entity%3DpodcastEpisode%26media%3Dpodcast`
    )
  })

  it('should return { results: [], resultCount: 0 } if api fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.reject({ feed: { entry: EpisodeServiceMock } })
    })
    const episodes = await getEpisodesFromAPI(episodeRepository)({ podcastId })

    expect(episodes).toEqual({ results: [], resultCount: 0 })
  })

  it('should return { results: [], resultCount: 0 } if api returns empty array', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: [] } })
    })
    const episodes = await getEpisodesFromAPI(episodeRepository)({ podcastId })

    expect(episodes).toEqual({ results: [], resultCount: 0 })
  })

  it('should return { results: [], resultCount: 0 } if api returns undefined', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: undefined } })
    })
    const episodes = await getEpisodesFromAPI(episodeRepository)({ podcastId })

    expect(episodes).toEqual({ results: [], resultCount: 0 })
  })

  it('should get episodes from api (mock true)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ contents: JSON.stringify({ resultCount: 2, results: MockEpisodeFormTransform }) })
    })
    const episodes = await getEpisodesFromAPI(episodeRepository)({ podcastId })

    expect(episodes).toEqual(ResponseServiceTransformed)
  })
  //
  it('should not get episodes from api (mock false)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ contents: JSON.stringify({ resultCount: 2, results: [] }) })
    })

    const episodes = await getEpisodesFromAPI(episodeRepository)({ podcastId })

    expect(episodes).not.toEqual(ResponseServiceTransformed)
  })

  it('should call transformEpisode with correct params', async () => {
    const transformEpisodeMock = jest.spyOn(episodeTransformer, 'transformEpisode')

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ contents: JSON.stringify({ resultCount: 2, results: MockEpisodeFormTransform }) })
    })
    await getEpisodesFromAPI(episodeRepository)({ podcastId })
    expect(transformEpisodeMock).toHaveBeenCalledWith({ episodes: MockEpisodeFormTransform })
  })
})
