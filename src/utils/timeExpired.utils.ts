export const isTimeExpired = (time: number): boolean => {
  return Date.now() > time
}
