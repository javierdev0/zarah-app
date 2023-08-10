import { fireEvent, render } from '@testing-library/react'
import InputSearch from '../InputSearch'

describe('Component: InputSearch', () => {
  const props = {
    placeholder: 'Filter podcasts...',
    type: 'number',
    onChange: jest.fn()
  }

  let inputSearch: HTMLInputElement

  beforeEach(() => {
    const { getByPlaceholderText } = render(<InputSearch {...props} />)

    inputSearch = getByPlaceholderText(props.placeholder) as HTMLInputElement
  })

  it('should render the InputSearch component', () => {
    expect(inputSearch).toBeInTheDocument()
  })

  it('should have correct placeholder', () => {
    expect(inputSearch).toHaveAttribute('placeholder', props.placeholder)
  })

  it('should always be a search type', () => {
    expect(inputSearch).toHaveAttribute('type', 'search')
  })

  it('should render with empty value', () => {
    expect(inputSearch).toHaveValue('')
  })

  it('should update value when input value change', () => {
    const value = 'Testing value'

    fireEvent.change(inputSearch, { target: { value } })
    expect(inputSearch).toHaveValue(value)
  })
})
