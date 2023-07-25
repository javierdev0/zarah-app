import { ReactNode, createContext, useState } from 'react'

type TransitionContextProps = {
  isTransitioning: boolean
  setIsTransitioning: (value: boolean) => void
}

const initialState: TransitionContextProps = {
  isTransitioning: false,
  setIsTransitioning: () => {}
}

const TransitionContext = createContext<TransitionContextProps>(initialState)

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>{children}</TransitionContext.Provider>
  )
}

export default { Context: TransitionContext, Provider: TransitionProvider }
