import React from 'react'

const LoaderSuspense = () => {
  return <div className='w-full h-[calc(100vh-2.5rem)] grid place-content-center'>Loading...</div>
}

export default React.memo(LoaderSuspense)
