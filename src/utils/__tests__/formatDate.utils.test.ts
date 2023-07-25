import { formatDate } from '../formatDate.utils'

describe('Function: formatDate', () => {
  it('should return Date not found when date is undefined', () => {
    expect(formatDate({ date: undefined })).toBe('Date not found')
  })

  it('should return Date not found when date is null', () => {
    expect(formatDate({ date: null })).toBe('Date not found')
  })

  it('should return Date not found when date is empty', () => {
    expect(formatDate({ date: '' })).toBe('Date not found')
  })

  it('should return 1/1/2021 when date is 2021-01-01T00:00:00', () => {
    expect(formatDate({ date: new Date('2021-01-01T00:00:00') })).toBe('1/1/2021')
  })

  it('should return 1/1/2021 when date is 2021-01-01T00:00:00Z', () => {
    expect(formatDate({ date: new Date('2021-01-01T00:00:00Z') })).toBe('1/1/2021')
  })
})
