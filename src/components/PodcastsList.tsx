import { PodcastResponseTransformed } from '../types/podcast.type'
import CardPodcast from './CardPodcast'

type Props = {
  podcastsFiltered: PodcastResponseTransformed[]
}

export default function PodcastsList({ podcastsFiltered }: Props) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-y-40 items-start place-items-center'>
      {podcastsFiltered.map((podcast: PodcastResponseTransformed) => (
        <li className='w-fit' key={podcast.id}>
          <CardPodcast img={podcast.image} title={podcast.title} author={podcast.artist} podcastId={podcast.id} />
        </li>
      ))}
    </ul>
  )
}
