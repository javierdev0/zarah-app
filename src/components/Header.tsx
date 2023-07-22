import { Ping } from '@uiball/loaders'

export default function Header() {
  return (
    <header className='border-b py-2 flex justify-between items-center sticky top-0 bg-white z-50'>
      <h1 className='font-bold text-cyan-600 text-lg'>Podcaster</h1>
      <Ping size={45} speed={2} color='#1c95b7' />
    </header>
  )
}
