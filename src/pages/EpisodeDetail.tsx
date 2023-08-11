import { useParams } from 'react-router-dom'
import { findEpisodeById } from '../utils/findEpisodeById.utils'
import useEpisodes from '../hooks/useEpisodes'
import { useState } from 'react'
import useTransition from '../hooks/useTransition'
import { isHTML } from '../utils/validateHTML.utils'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

export default function EpisodeDetail() {
  const [audioIsLoaded, setAudioIsLoaded] = useState(false)
  const { episodeId = '', podcastId = '' } = useParams<{ podcastId: string; episodeId: string }>()
  const { episodes, isLoading } = useEpisodes({ podcastId })

  useTransition({ isLoading })

  if (!episodeId) return <h2>Episode not found</h2>

  const episode = findEpisodeById({ episodes, episodeId: parseInt(episodeId) })

  return (
    <article className='px-4 py-6 bg-white border shadow-card mb-8'>
      <h2 className='text-2xl font-semibold'>{episode?.trackName}</h2>
      <p className='text-sm italic mt-3' style={{ whiteSpace: 'pre-wrap' }}>
        {isHTML(episode?.description)
          ? parse(DOMPurify.sanitize(episode?.description || ''))
          : episode?.description || 'Description not found'}
      </p>
      <section className='flex flex-col gap-x-8 items-center mt-8'>
        {!audioIsLoaded && episode?.episodeUrl && <span>Loading audio...</span>}
        {episode?.episodeUrl ? (
          <audio
            src={episode?.episodeUrl}
            controls
            onCanPlayThrough={() => setAudioIsLoaded(true)}
            className={audioIsLoaded ? 'custom-audio-player' : 'custom-audio-player hidden'}
          >
            Your browser does not support the <code>audio</code> element.
          </audio>
        ) : (
          <span>Audio not found</span>
        )}
      </section>
    </article>
  )
}
