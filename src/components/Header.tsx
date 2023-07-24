import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes.constants'
import React, { useContext } from 'react'
import Loader from './Loader'
import TransitionContext from '../contexts/Transition.context'

const Header = () => {
  const { isTransitioning } = useContext(TransitionContext.Context)

  return (
    <header className='border-b h-10 flex justify-between items-center sticky top-0 bg-white z-50 w-full'>
      <Link to={ROUTES.HOME}>
        <h1 className='font-bold text-cyan-600 text-lg cursor-pointer hover:underline'>Podcaster</h1>
      </Link>
      {isTransitioning && (
        <div className='loader-container'>
          <Loader />
        </div>
      )}
    </header>
  )
}

export default React.memo(Header)
