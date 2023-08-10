import { render } from '@testing-library/react'
import Loader from '../Loader'

describe('Component: Loader', () => {
  it('should render the Loader component', () => {
    const component = render(<Loader />)

    expect(component).toBeTruthy()
  })
})
