import { PodcastResponseTransformed } from '../types/podcast.type'

type Params = {
  podcasts: PodcastResponseTransformed[] | undefined
  keyword: string
}

export const filterPodcastsByKeyword = ({ podcasts, keyword }: Params): PodcastResponseTransformed[] | [] => {
  if (!podcasts) return []

  const keywordLower = keyword.toLowerCase()

  return podcasts.filter(({ title, artist }: PodcastResponseTransformed) => {
    return title.toLowerCase().includes(keywordLower) || artist.toLowerCase().includes(keywordLower)
  })
}
