import { filterPodcastsByKeyword } from '../utils/filterPodcastsByKeyword.utils'
import usePodcasts from '../hooks/usePodcasts'
import InputSearch from '../components/InputSearch'
import { useState } from 'react'
import PodcastsList from '../components/PodcastsList'
import CounterPodcasts from '../components/CounterPodcasts'
import useTransition from '../hooks/useTransition'

export default function Home() {
  const [keyword, setKeyword] = useState<string>('')
  const { podcasts, isLoading } = usePodcasts()
  useTransition({ isLoading })

  const podcastsFiltered = filterPodcastsByKeyword({ podcasts, keyword })

  return (
    <>
      <main className='w-[1000px]'>
        <div className='flex items-center justify-end gap-3 px-4 mt-5'>
          <CounterPodcasts quantity={podcastsFiltered.length} />

          <InputSearch
            placeholder='Filter podcasts..'
            value={keyword}
            onChange={event => setKeyword(event.target.value)}
          />
        </div>
      </main>
      <PodcastsList podcastsFiltered={podcastsFiltered} />
    </>
  )
}
