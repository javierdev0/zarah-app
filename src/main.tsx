import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TransitionContext from './contexts/Transition.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TransitionContext.Provider>
    <App />
  </TransitionContext.Provider>
)
