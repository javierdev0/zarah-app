export enum ROUTES {
  HOME = '/',
  PODCAST = 'podcast',
  PODCAST_DETAIL = `${ROUTES.PODCAST}/:podcastId`,
  EPISODE = 'episode',
  EPISODE_DETAIL = `${ROUTES.PODCAST_DETAIL}/${ROUTES.EPISODE}/:episodeId`
}
