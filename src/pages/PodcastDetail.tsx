import { useParams } from 'react-router-dom'
import CounterEpisodes from '../components/CounterEpisodes'
import useEpisodes from '../hooks/useEpisodes'
import TableEpisodes from '../components/TableEpisodes'
import useTransition from '../hooks/useTransition'

export default function PodcastDetail() {
  const { podcastId = '' } = useParams<{ podcastId: string }>()
  const { episodes, resultCount, isLoading } = useEpisodes({ podcastId })
  useTransition({ isLoading })

  if (!podcastId) return <h2>Episodes not found</h2>

  return (
    <main className='flex flex-col gap-y-8 pb-10'>
      {isLoading ? (
        <div className='h-[calc(100vh-2.5rem-2.5rem)] grid place-content-center'>Loading episodes...</div>
      ) : (
        <>
          <CounterEpisodes quantityEpisodes={resultCount} />
          <TableEpisodes episodes={episodes} />
        </>
      )}
    </main>
  )
}
