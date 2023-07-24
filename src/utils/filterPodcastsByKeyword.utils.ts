import { Podcast } from '../types/podcast.type'

type Params = {
  podcasts: Podcast[] | undefined
  keyword: string
}

export const filterPodcastsByKeyword = ({ podcasts, keyword }: Params): Podcast[] | [] => {
  if (!podcasts) return []

  return podcasts.filter((podcast: Podcast) => {
    const title = podcast['im:name'].label.toLowerCase()
    const author = podcast['im:artist'].label.toLowerCase()
    const keywordLower = keyword.toLowerCase()

    return title.includes(keywordLower) || author.includes(keywordLower)
  })
}
