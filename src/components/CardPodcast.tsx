import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes.constants'

type Props = {
  img: string
  title: string
  author: string
  podcastId: string
}

export default function CardPodcast({ img, title, author, podcastId }: Props) {
  return (
    <Link to={`${ROUTES.PODCAST}/${podcastId}`}>
      <article className='bg-white w-56 flex flex-col justify-center items-center hover:scale-[1.01] transition-transform duration-500 ease-in-out'>
        <figure>
          <img
            src={img}
            alt={title ? `Cover of the podcast ${title}.` : 'No title'}
            className='relative z-10 rounded-full object-cover w-36 h-36'
          />
        </figure>
        <section className='p-4 text-center shadow-card rounded-t-none rounded-sm bg-white pt-20 -mt-20 w-full border border-t-0'>
          <h2 className='font-medium text-center uppercase'>{title || 'No title'}</h2>
          <span className='text-gray-600 text-center font-normal mt-2'>
            {author ? `Author: ${author}` : 'No author'}
          </span>
        </section>
      </article>
    </Link>
  )
}
