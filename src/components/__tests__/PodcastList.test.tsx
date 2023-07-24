import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PodcastsList from '../PodcastsList'
import { PodcastListMock } from '../__mocks__/PodcastList.mock'

describe('Component: PodcastList', () => {
  let component: ReturnType<typeof render>

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <PodcastsList podcastsFiltered={PodcastListMock} />
      </BrowserRouter>
    )
  })

  it('should render the component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the correct number of podcasts', () => {
    const podcastItems = component.getAllByRole('listitem')
    expect(podcastItems).toHaveLength(PodcastListMock.length)
  })
})
