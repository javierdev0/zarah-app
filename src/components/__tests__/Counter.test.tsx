import { render } from '@testing-library/react'
import Counter from '../Counter'

describe('Component: Counter', () => {
  const props = {
    quantity: 1
  }

  let span: HTMLElement | null
  beforeEach(() => {
    render(<Counter {...props} />)
    span = document.querySelector('span')
  })

  it('should render the Counter component', () => {
    expect(span).toBeInTheDocument()
  })

  it('should render the quantity', () => {
    expect(span?.textContent).toBe(props.quantity.toString())
  })
})
