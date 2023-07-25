import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes.constants'
import { EspisodeTransformed } from '../types/episode.type'
import { formatDate } from '../utils/formatDate.utils'
import { formatDurationEpisode } from '../utils/formatDurationEpisode.utils'

type Props = {
  episodes: EspisodeTransformed[]
}

export default function TableEpisodes({ episodes }: Props) {
  return (
    <div className='bg-white px-4 py-6 shadow-card border w-full text-sm'>
      <table className='w-full table-auto divide-y divide-gray-200'>
        <thead className='border-b-2 text-left'>
          <tr>
            <th className='p-2'>Title</th>
            <th className='p-2'>Date</th>
            <th className='p-2 text-center'>Duration</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y-2 divide-gray-200'>
          {episodes.map((episode: EspisodeTransformed, index: number) => (
            <tr
              style={{
                backgroundColor: index % 2 === 0 ? '#f7fafc' : 'white'
              }}
              key={`${episode.trackId}-${episode.trackName}`}
            >
              <td className='whitespace-nowrap truncate p-2 text-sky-500 max-w-[300px]'>
                <Link to={`${ROUTES.EPISODE}/${episode.trackId}`} className='hover:underline'>
                  {episode.trackName || 'Title not found'}
                </Link>
              </td>
              <td className='whitespace-nowrap p-2'>{formatDate({ date: episode.releaseDate })}</td>
              <td className='whitespace-nowrap p-2 text-center'>
                {formatDurationEpisode({ durationInMilliseconds: episode.trackTimeMillis })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
