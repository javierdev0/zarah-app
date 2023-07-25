export default function Loader() {
  return (
    <div className='relative w-5 h-5 loader-container'>
      <div className='absolute w-full h-full rounded-full bg-cyan-600 animate-ping'></div>
      <div className='absolute w-full h-full rounded-full bg-cyan-600 opacity-50 animate-pulse'></div>
    </div>
  )
}
