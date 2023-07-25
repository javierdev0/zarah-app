import { useContext, useEffect } from 'react'
import TransitionContext from '../contexts/Transition.context'

const useTransition = ({ isLoading }: { isLoading: boolean }) => {
  const { setIsTransitioning } = useContext(TransitionContext.Context)

  useEffect(() => {
    setIsTransitioning(isLoading)
  }, [isLoading])
}

export default useTransition
