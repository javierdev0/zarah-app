import { Podcast } from '../../types/podcast.type'

export const PodcastListMock: Podcast[] = [
  {
    id: {
      attributes: {
        'im:id': '1'
      },
      label: '1'
    },
    summary: {
      label: 'Podcast Summary 1'
    },
    'im:image': [
      {
        label: 'image1.jpg',
        attributes: {
          height: '55'
        }
      },
      {
        label: 'image2.jpg',
        attributes: {
          height: '60'
        }
      },
      {
        label: 'image3.jpg',
        attributes: {
          height: '65'
        }
      }
    ],
    'im:name': {
      label: 'Podcast Title 1'
    },
    'im:artist': {
      label: 'Podcast Author 1'
    }
  },
  {
    id: {
      attributes: {
        'im:id': '2'
      },
      label: '2'
    },
    summary: {
      label: 'Podcast Summary 2'
    },
    'im:image': [
      {
        label: 'image4.jpg',
        attributes: {
          height: '55'
        }
      },
      {
        label: 'image5.jpg',
        attributes: {
          height: '60'
        }
      },
      {
        label: 'image6.jpg',
        attributes: {
          height: '65'
        }
      }
    ],
    'im:name': {
      label: 'Podcast Title 2'
    },
    'im:artist': {
      label: 'Podcast Author 2'
    }
  }
]
