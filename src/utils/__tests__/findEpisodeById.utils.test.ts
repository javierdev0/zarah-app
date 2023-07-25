import { MockEpisode } from '../__mocks__/findEpisodeById.utils'
import { findEpisodeById } from '../findEpisodeById.utils'

describe('Function: findEpisodeById', () => {
  it('should return undefined if episodes are not provided', () => {
    const episode = findEpisodeById({ episodes: undefined, episodeId: 1 })

    expect(episode).toBeUndefined()
  })

  it('should return undefined if episodeId is not provided', () => {
    const episode = findEpisodeById({ episodes: [], episodeId: undefined })

    expect(episode).toBeUndefined()
  })

  it('should return undefined if episode is not found', () => {
    const episode = findEpisodeById({ episodes: MockEpisode, episodeId: 6 })

    expect(episode).toBeUndefined()
  })

  it('should return the episode if it is found', () => {
    const episode = findEpisodeById({ episodes: MockEpisode, episodeId: 1 })

    expect(episode).toEqual(MockEpisode[0])
  })
})
