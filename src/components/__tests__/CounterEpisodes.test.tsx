import { render } from '@testing-library/react'
import CounterEpisodes from '../CounterEpisodes'

describe('Component: CounterEpisodes', () => {
  const props = {
    quantityEpisodes: 66
  }
  let component: ReturnType<typeof render>

  beforeEach(() => {
    component = render(<CounterEpisodes quantityEpisodes={props.quantityEpisodes} />)
  })

  it('should render the CounterEpisodes component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the quantity of episodes', () => {
    const quantity = component.getByText(`Episodes: ${props.quantityEpisodes}`)

    expect(quantity).toBeInTheDocument()
  })
})
