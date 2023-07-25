import { MockPodcastForFind } from '../__mocks__/findPodcast.utils.mock'
import { findPodcast } from '../findPodcast.utils'

describe('Function: findPodcast', () => {
  it('should return undefined if podcasts are not provided', () => {
    const podcast = findPodcast({ podcasts: undefined, podcastId: '1' })

    expect(podcast).toBeUndefined()
  })

  it('should return undefined if podcastId is not provided', () => {
    const podcast = findPodcast({ podcasts: MockPodcastForFind, podcastId: '' })

    expect(podcast).toBeUndefined()
  })

  it('should return undefined if podcast is not found', () => {
    const podcast = findPodcast({ podcasts: MockPodcastForFind, podcastId: '9' })

    expect(podcast).toBeUndefined()
  })

  it('should return the podcast if it is found', () => {
    const podcast = findPodcast({ podcasts: MockPodcastForFind, podcastId: '1' })

    expect(podcast).toEqual(MockPodcastForFind[0])
  })
})
