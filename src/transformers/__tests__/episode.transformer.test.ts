import { Episode } from '../../types/episode.type'
import { MockEpisodeFormTransform, MockEpisodeTransformed } from '../__mock__/episode.transformer.mock'
import * as episodeTransformer from '../episode.transformer'

describe('Transformer: transformEpisode', () => {
  it('should return empty array if episodes is undefined', () => {
    const episodes = undefined
    const transformedEpisodes = episodeTransformer.transformEpisode({ episodes })
    expect(transformedEpisodes).toEqual([])
  })

  it('should return empty array if episodes is empty', () => {
    const episodes: Episode[] = []
    const transformedEpisodes = episodeTransformer.transformEpisode({ episodes })
    expect(transformedEpisodes).toEqual([])
  })

  it('should return transformed episodes', () => {
    const transformedEpisodes = episodeTransformer.transformEpisode({ episodes: MockEpisodeFormTransform })
    expect(transformedEpisodes).toEqual(MockEpisodeTransformed)
  })

  it('should fail for invalid episodes', () => {
    const transformedEpisodes = episodeTransformer.transformEpisode({ episodes: MockEpisodeFormTransform })
    expect(transformedEpisodes).not.toEqual(MockEpisodeFormTransform)
  })
})
