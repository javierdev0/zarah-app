type Props = {
  quantityEpisodes: number
}

export default function CounterEpisodes({ quantityEpisodes }: Props) {
  return (
    <span className='bg-white shadow-card py-2 px-4 h-16 border w-full flex items-center text-2xl font-semibold'>
      Episodes: {quantityEpisodes}
    </span>
  )
}
