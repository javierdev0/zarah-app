type Params = {
  durationInMilliseconds?: number | null
}

export const formatDurationEpisode = ({ durationInMilliseconds }: Params): string => {
  if (!durationInMilliseconds) return '00:00:00'

  const hours = Math.floor(durationInMilliseconds / 3600000)
  const minutes = Math.floor((durationInMilliseconds - hours * 3600000) / 60000)
  const seconds = Math.floor((durationInMilliseconds - hours * 3600000 - minutes * 60000) / 1000)

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`

  return `${hoursString}:${minutesString}:${secondsString}`
}
