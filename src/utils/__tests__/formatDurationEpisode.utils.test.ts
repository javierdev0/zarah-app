import { formatDurationEpisode } from '../formatDurationEpisode.utils'

describe('Function: formatDurationEpisode', () => {
  it('should return 00:00:00 when durationInMilliseconds is 0', () => {
    expect(formatDurationEpisode({ durationInMilliseconds: 0 })).toBe('00:00:00')
  })

  it('should return 00:00:00 when durationInMilliseconds is undefined', () => {
    expect(formatDurationEpisode({ durationInMilliseconds: undefined })).toBe('00:00:00')
  })

  it('should return 00:00:00 when durationInMilliseconds is null', () => {
    expect(formatDurationEpisode({ durationInMilliseconds: null })).toBe('00:00:00')
  })
})
