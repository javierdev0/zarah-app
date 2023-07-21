import { podcastsServiceMockFalse, podcastsServiceMockTrue } from '../__mocks__/podcast.service.mock'
import { getPodcasts } from '../podcast.service'

describe('Podcasts service', () => {
  it('should get podcasts from api (mock true)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: podcastsServiceMockTrue } })
    })
    const podcasts = await getPodcasts()
    expect(podcasts).toEqual(podcastsServiceMockTrue)
  })

  it('should not get podcasts from api (mock false)', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ feed: { entry: podcastsServiceMockFalse } })
    })
    const podcasts = await getPodcasts()
    expect(podcasts).not.toEqual(podcastsServiceMockTrue)
  })
})
