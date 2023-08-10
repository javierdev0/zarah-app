import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { SidebarMock } from '../__mocks__/Sidebar.mock'

describe('Component: Sidebar', () => {
  let component: ReturnType<typeof render>

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Sidebar {...SidebarMock} />
      </BrowserRouter>
    )
  })

  it('should render the component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the aside element', () => {
    const aside = component.getByRole('complementary')

    expect(aside).toBeTruthy()
  })

  it('should render link', () => {
    const link = component.getAllByRole('link')

    expect(link).toHaveLength(3)
  })

  it('should render the img element', () => {
    const img = component.getByRole('img')

    expect(img).toBeTruthy()
  })

  it('should have the correct img src', () => {
    const img = component.getByRole('img')

    expect(img).toHaveAttribute('src', SidebarMock.img)
  })

  it('should have the correct img alt', () => {
    const img = component.getByRole('img')

    expect(img).toHaveAttribute('alt', `Cover of the podcast "${SidebarMock.artist}".`)
  })

  it('should render the correct artist', () => {
    const artist = component.getByText(SidebarMock.artist)

    expect(artist).toBeTruthy()
  })

  it('should render the correct description', () => {
    const description = component.getByText(SidebarMock.description)

    expect(description).toBeTruthy()
  })

  it('should render the correct title', () => {
    const title = component.getByText(SidebarMock.title)

    expect(title).toBeTruthy()
  })

  it('should render all the correct links', () => {
    const links = component.getAllByRole('link')

    links.forEach(link => {
      expect(link).toHaveAttribute('href', `/podcast/${SidebarMock.podcastId}`)
    })
  })
})
