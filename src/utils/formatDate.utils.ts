type Params = {
  date?: Date | string | null
}

export const formatDate = ({ date }: Params): string => {
  if (!date) return 'Date not found'

  const newDate = new Date(date)
  const day = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()

  return `${day}/${month}/${year}`
}
