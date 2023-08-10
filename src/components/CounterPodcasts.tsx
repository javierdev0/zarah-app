import VisuallyHidden from './VisuallyHidden'

export default function CounterPodcasts({ quantity }: { quantity: number }) {
  return (
    <span className='rounded-md bg-cyan-700 text-white font-bold px-1'>
      {quantity} <VisuallyHidden>Podcasts</VisuallyHidden>
    </span>
  )
}
