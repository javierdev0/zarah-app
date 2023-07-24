import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes.constants'

type Props = {
  title: string
  img: string
  artist: string
  description: string
  podcastId: string
}

export default function Sidebar({ img, artist, description, title, podcastId }: Props) {
  return (
    <aside className='bg-white shadow-card w-full px-2 py-4 text-left text-sm rounded-sm border mb-8'>
      <Link to={`/${ROUTES.PODCAST}/${podcastId}`}>
        <img
          src={img}
          alt={`Cover of the podcast "${artist}".`}
          className='object-cover rounded-md w-44 h-44 mx-auto hover:scale-[1.01] transition-transform duration-500 ease-in-out focus'
        />
      </Link>
      <section className='border-t border-b my-4 py-4 pl-2'>
        <Link to={`/${ROUTES.PODCAST}/${podcastId}`}>
          <h2 className='font-semibold hover:underline focus'>{title}</h2>
        </Link>
        <p className='italic'>
          by:{' '}
          <Link to={`/${ROUTES.PODCAST}/${podcastId}`} className='hover:underline'>
            {artist}
          </Link>
        </p>
      </section>
      <section className='grid gap-y-2'>
        <h3 className='font-medium'>Description:</h3>
        <p className='italic break-all'>{description}</p>
      </section>
    </aside>
  )
}
