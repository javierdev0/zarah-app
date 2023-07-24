type Params = {
  time: number
}

export const isTimeExpired = ({ time }: Params): boolean => {
  if (!time) return true

  return Date.now() > time
}
