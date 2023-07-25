import { BrowserRouter } from 'react-router-dom'
import TableEpisodes from '../TableEpisodes'
import { render } from '@testing-library/react'
import { TableEpisodesMockFalse, TableEpisodesMockTrue } from '../__mocks__/TableEpisodes.mock'
import { formatDate } from '../../utils/formatDate.utils'
import { formatDurationEpisode } from '../../utils/formatDurationEpisode.utils'

describe('Component: TableEpisodes', () => {
  let component: ReturnType<typeof render>

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <TableEpisodes episodes={TableEpisodesMockTrue} />
      </BrowserRouter>
    )
  })

  it('should render the component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the table', () => {
    const table = component.getByRole('table')
    expect(table).toBeTruthy()
  })

  it('should render the table head and body', () => {
    const elementsNames = ['THEAD', 'TBODY']

    const elements = component.getAllByRole('rowgroup')
    elements.forEach(element => {
      const hasElement = elementsNames.includes(element.tagName)
      expect(hasElement).toBeTruthy()
    })
  })

  it('should render all th elements', () => {
    const headerTitles = ['Title', 'Date', 'Duration']
    headerTitles.forEach(title => {
      const th = component.getByRole('columnheader', { name: title })
      expect(th).toBeInTheDocument()
    })

    const ths = component.getAllByRole('columnheader')
    expect(ths).toHaveLength(3)
  })

  it('should render all episode rows with correct data', () => {
    TableEpisodesMockTrue.forEach(episode => {
      const title = component.getByRole('link', { name: episode.trackName })
      expect(title).toBeInTheDocument()

      const date = component.getByText(formatDate({ date: episode.releaseDate }))
      expect(date).toBeInTheDocument()

      const duration = component.getByText(formatDurationEpisode({ durationInMilliseconds: episode.trackTimeMillis }))
      expect(duration).toBeInTheDocument()
    })
  })

  it('should render alter data when data is null, undefined', () => {
    component.rerender(
      <BrowserRouter>
        <TableEpisodes episodes={TableEpisodesMockFalse} />
      </BrowserRouter>
    )

    TableEpisodesMockFalse.forEach(episode => {
      const title = component.getByRole('link', { name: 'Title not found' })
      expect(title).toBeInTheDocument()

      const date = component.getByText(formatDate({ date: episode.releaseDate }))
      expect(date).toBeInTheDocument()

      const duration = component.getByText(formatDurationEpisode({ durationInMilliseconds: episode.trackTimeMillis }))
      expect(duration).toBeInTheDocument()
    })
  })
})
