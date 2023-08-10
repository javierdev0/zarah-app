import { useState, useEffect } from 'react'
import { TIME_EXPIRATION_PODCASTS_MS } from '../constants/common.constants'
import { isTimeExpired } from '../utils/timeExpired.utils'

type LocalStorageValue<T> = {
  value: T
  expiration: number
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<LocalStorageValue<T>>(() => {
    const storedValue = localStorage.getItem(key)

    if (storedValue) {
      const parsedValue = JSON.parse(storedValue) as LocalStorageValue<T>
      const isExpired = isTimeExpired({ time: parsedValue.expiration })

      if (isExpired) {
        localStorage.removeItem(key)

        return { value: initialValue, expiration: 0 }
      } else {
        return parsedValue
      }
    }

    return { value: initialValue, expiration: 0 }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  const setValue = (newValue: T) => {
    const expiration = Date.now() + TIME_EXPIRATION_PODCASTS_MS

    setState({ value: newValue, expiration })
  }

  return { valueStored: state.value, expiration: state.expiration, setLocalStorage: setValue }
}

export default useLocalStorage
