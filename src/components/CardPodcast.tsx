type Props = {
  img: string
  title: string
  author: string
}

export default function CardPodcast({ img, title, author }: Props) {
  return (
    <button
      type='button'
      className='cursor-pointer bg-white w-56 flex flex-col justify-center items-center hover:scale-[1.01] transition-transform duration-500 ease-in-out focus'
    >
      <figure>
        <img
          src={img}
          alt={`Cover of the podcast "${title}".`}
          className='relative z-10 rounded-full object-cover w-36 h-36'
        />
      </figure>
      <section className='p-4 shadow-card rounded-t-none rounded-sm bg-white pt-20 -mt-20 w-full'>
        <h2 className='font-medium text-center uppercase'>{title}</h2>
        <span className='text-gray-600 text-center font-normal mt-2'>Author: {author}</span>
      </section>
    </button>
  )
}
