import { Podcast } from '../../types/podcast.type'
import { MockPodcastForTransform, MockPodcastTransformed } from '../__mock__/podcast.transformer.mock'
import * as podcastTransformer from '../podcast.transformer'

describe('Transformer: transformPodcast', () => {
  it('should return empty array if podcasts is undefined', () => {
    const podcasts = undefined
    const transformedPodcasts = podcastTransformer.transformPodcast({ podcasts })
    expect(transformedPodcasts).toEqual([])
  })

  it('should return empty array if podcasts is empty', () => {
    const podcasts: Podcast[] = []
    const transformedPodcasts = podcastTransformer.transformPodcast({ podcasts })
    expect(transformedPodcasts).toEqual([])
  })

  it('should return transformed podcasts', () => {
    const transformedPodcasts = podcastTransformer.transformPodcast({ podcasts: MockPodcastForTransform })
    expect(transformedPodcasts).toEqual(MockPodcastTransformed)
  })

  it('should fail for invalid podcasts', () => {
    const transformedPodcasts = podcastTransformer.transformPodcast({ podcasts: MockPodcastForTransform })
    expect(transformedPodcasts).not.toEqual(MockPodcastForTransform)
  })
})
