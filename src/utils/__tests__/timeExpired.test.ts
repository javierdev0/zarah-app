import { isTimeExpired } from '../timeExpired.utils'

describe('Function: timeExpired', () => {
  const timeExpired = Date.now() - 1000
  const timeActive = Date.now() + 1000

  it('should return true if time is expired', () => {
    const isExpired = isTimeExpired(timeExpired)
    expect(isExpired).toBe(true)
  })

  it('should return false if time is not expired', () => {
    const isExpired = isTimeExpired(timeActive)
    expect(isExpired).toBe(false)
  })
})
