import { MockPodcastForFilter } from '../__mocks__/filterPodcastsByKeyword.utils.mock'
import { filterPodcastsByKeyword } from '../filterPodcastsByKeyword.utils'

describe('Function: filterPodcastsByKeyword', () => {
  it('should return empty array if podcasts are not provided', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: undefined, keyword: 'test' })

    expect(podcasts).toEqual([])
  })

  it('should return empty array if keyword is not provided', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: [], keyword: '' })

    expect(podcasts).toEqual([])
  })

  it('should return empty array if podcasts and keyword are not provided', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: undefined, keyword: '' })

    expect(podcasts).toEqual([])
  })

  it('should return empty array if podcasts are empty', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: [], keyword: 'test' })

    expect(podcasts).toEqual([])
  })

  it('should return empty array if keyword is not found', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: MockPodcastForFilter, keyword: 'not found' })

    expect(podcasts).toEqual([])
  })

  it('should return the podcasts if keyword is found in title', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: MockPodcastForFilter, keyword: 'Podcast' })

    expect(podcasts).toEqual(MockPodcastForFilter)
  })

  it('should return the podcasts if keyword is found in author', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: MockPodcastForFilter, keyword: 'Author' })

    expect(podcasts).toEqual(MockPodcastForFilter)
  })

  it('should return the podcast with matching keyword in the title', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: MockPodcastForFilter, keyword: 'Podcast 1' })

    expect(podcasts).toEqual([MockPodcastForFilter[0]])
  })

  it('should return the podcast with matching keyword in the author', () => {
    const podcasts = filterPodcastsByKeyword({ podcasts: MockPodcastForFilter, keyword: 'Author 1' })

    expect(podcasts).toEqual([MockPodcastForFilter[0]])
  })
})
