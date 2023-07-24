import { render } from '@testing-library/react'
import CardPodcast from '../CardPodcast'
import { CardPodcastMockFalse, CardPodcastMockTrue } from '../__mocks__/CardPodcast.mock'
import { BrowserRouter } from 'react-router-dom'

describe('Component: CardPodcast', () => {
  let component: ReturnType<typeof render>

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <CardPodcast {...CardPodcastMockTrue} />
      </BrowserRouter>
    )
  })

  it('should render the CardPodcast component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the podcast image', () => {
    const img = component.getByRole('img')
    expect(img).toBeTruthy()
  })

  it('should render the podcast alt', () => {
    const alt = component.getByAltText(`Cover of the podcast "${CardPodcastMockTrue.title}".`)
    expect(alt).toBeTruthy()
  })

  it('should render the podcast title', () => {
    const title = component.getByText(CardPodcastMockTrue.title)
    expect(title).toBeTruthy()
  })

  it('should render the podcast author', () => {
    const author = component.getByText(`Author: ${CardPodcastMockTrue.author}`)
    expect(author).toBeTruthy()
  })

  it('should render the podcast link', () => {
    const link = component.getByRole('link')
    expect(link).toBeTruthy()
  })

  it('should render the podcast link with the correct href', () => {
    const link = component.getByRole('link')
    expect(link.getAttribute('href')).toBe(`/podcast/${CardPodcastMockTrue.podcastId}`)
  })

  it('should show alter data when data is null or undefined', () => {
    component.rerender(
      <BrowserRouter>
        <CardPodcast {...CardPodcastMockFalse} />
      </BrowserRouter>
    )

    const img = component.getByAltText('No title')
    const title = component.getByText('No title')
    const author = component.getByText('No author')

    expect(img).toBeTruthy()
    expect(title).toBeTruthy()
    expect(author).toBeTruthy()
  })
})
