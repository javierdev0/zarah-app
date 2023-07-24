import { Podcast } from '../types/podcast.type'
import CardPodcast from './CardPodcast'

type Props = {
  podcastsFiltered: Podcast[]
}

export default function PodcastsList({ podcastsFiltered }: Props) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-y-40 items-start place-items-center'>
      {podcastsFiltered.map((podcast: Podcast) => (
        <li className='w-fit' key={podcast.id.attributes['im:id']}>
          <CardPodcast
            img={podcast['im:image'][2].label}
            title={podcast['im:name'].label}
            author={podcast['im:artist'].label}
            podcastId={podcast.id.attributes['im:id']}
          />
        </li>
      ))}
    </ul>
  )
}
