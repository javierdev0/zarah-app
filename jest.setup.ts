import fetch, { FetchMock } from 'jest-fetch-mock'
import '@testing-library/jest-dom/extend-expect'
;(global as any).fetch = fetch as FetchMock
