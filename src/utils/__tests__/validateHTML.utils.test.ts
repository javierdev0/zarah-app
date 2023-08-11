import { isHTML } from '../validateHTML.utils'

describe('Function: validateHTML', () => {
  it('should return true if the HTML is valid', () => {
    const html = '<div><p>Test</p></div>'
    const result = isHTML(html)

    expect(result).toBe(true)
  })

  it('should return true if the HTML is invalid', () => {
    const invalidHTML = '<div><p>Hello, world!</div>'
    const result = isHTML(invalidHTML)

    expect(result).toBe(true)
  })

  it('should return false for non-HTML content', () => {
    const nonHTML = 'This is not HTML'
    const result = isHTML(nonHTML)

    expect(result).toBe(false)
  })

  it('should return false for empty content', () => {
    const empty = ''
    const result = isHTML(empty)

    expect(result).toBe(false)
  })
})
