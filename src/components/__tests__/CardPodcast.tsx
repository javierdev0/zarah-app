import { render } from '@testing-library/react'
import CardPodcast from '../CardPodcast'

describe('Component: CardPodcast', () => {
  const props = {
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
    title: 'The Joe Budden Podcast',
    author: 'The Joe Budden Network'
  }

  let component: ReturnType<typeof render>

  beforeEach(() => {
    component = render(<CardPodcast {...props} />)
  })

  it('should render the CardPodcast component', () => {
    expect(component).toBeTruthy()
  })

  it('should render the podcast cover', () => {
    const alt = component.getByAltText(`Cover of the podcast "${props.title}".`)
    expect(alt).toBeTruthy()
  })

  it('should render the podcast title', () => {
    const title = component.getByText(props.title)
    expect(title).toBeTruthy()
  })

  it('should render the podcast author', () => {
    const author = component.getByText(`Author: ${props.author}`)
    expect(author).toBeTruthy()
  })
})
