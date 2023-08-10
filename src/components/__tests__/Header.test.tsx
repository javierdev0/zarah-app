import { render } from '@testing-library/react'
import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'

describe('Component: Header', () => {
  let component: ReturnType<typeof render>

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it('should render the Header component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the link with the correct text', () => {
    const link = component.getByRole('link')

    expect(link.textContent).toBe('Podcaster')
  })

  it('should render the link', () => {
    const link = component.getByRole('link')

    expect(link).toBeTruthy()
  })

  it('should render the link with the correct href', () => {
    const link = component.getByRole('link')

    expect(link.getAttribute('href')).toBe('/')
  })
})
