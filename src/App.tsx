import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { ROUTES } from './constants/routes.constants'
import DetailLayout from './components/DetailLayout'
import React, { Suspense } from 'react'
import MainLayout from './components/MainLayout'
import LoaderSuspense from './components/LoaderSuspense'

const Home = React.lazy(() => import('./pages/Home'))
const EpisodeDetail = React.lazy(() => import('./pages/EpisodeDetail'))
const PodcastDetail = React.lazy(() => import('./pages/PodcastDetail'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route
            path={`/${ROUTES.HOME}`}
            element={
              <Suspense fallback={<LoaderSuspense />}>
                <Home />
              </Suspense>
            }
          />
        </Route>

        <Route path={ROUTES.PODCAST} element={<DetailLayout />}>
          <Route
            path={`/${ROUTES.PODCAST_DETAIL}`}
            element={
              <Suspense fallback={<LoaderSuspense />}>
                <PodcastDetail />
              </Suspense>
            }
          />
          <Route
            path={`/${ROUTES.EPISODE_DETAIL}`}
            element={
              <Suspense fallback={<LoaderSuspense />}>
                <EpisodeDetail />
              </Suspense>
            }
          />
        </Route>
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
