import { render } from '@testing-library/react'
import Header from '../Header'

describe('Component: Header', () => {
  let component: ReturnType<typeof render>
  beforeEach(() => {
    component = render(<Header />)
  })

  it('should render the Header component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the title', async () => {
    const title = 'Podcaster'
    const heading = component.getByRole('heading', { name: title })
    expect(heading.textContent).toBe(title)
  })
})
