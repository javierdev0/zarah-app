import { Podcast } from '../../types/podcast.type'

export const MockPodcastForFilter: Podcast[] = [
  {
    'im:name': { label: 'Podcast 1' },
    'im:image': [
      { label: 'image1.jpg', attributes: { height: '100' } },
      { label: 'image2.jpg', attributes: { height: '200' } },
      { label: 'image3.jpg', attributes: { height: '300' } }
    ],
    summary: { label: 'Summary of Podcast 1' },
    id: { label: '1', attributes: { 'im:id': '1' } },
    'im:artist': { label: 'Author 1', attributes: { href: 'author1.com' } }
  },
  {
    'im:name': { label: 'Podcast 2' },
    'im:image': [
      { label: 'image4.jpg', attributes: { height: '150' } },
      { label: 'image5.jpg', attributes: { height: '250' } },
      { label: 'image6.jpg', attributes: { height: '350' } }
    ],
    summary: { label: 'Summary of Podcast 2' },
    id: { label: '2', attributes: { 'im:id': '2' } },
    'im:artist': { label: 'Author 2', attributes: { href: 'author2.com' } }
  },
  {
    'im:name': { label: 'Podcast 2' },
    'im:image': [
      { label: 'image4.jpg', attributes: { height: '150' } },
      { label: 'image5.jpg', attributes: { height: '250' } },
      { label: 'image6.jpg', attributes: { height: '350' } }
    ],
    summary: { label: 'Summary of Podcast 2' },
    id: { label: '2', attributes: { 'im:id': '2' } },
    'im:artist': { label: 'Author 2', attributes: { href: 'author2.com' } }
  },
  {
    'im:name': { label: 'Podcast 3' },
    'im:image': [
      { label: 'image7.jpg', attributes: { height: '120' } },
      { label: 'image8.jpg', attributes: { height: '220' } },
      { label: 'image9.jpg', attributes: { height: '320' } }
    ],
    summary: { label: 'Summary of Podcast 3' },
    id: { label: '3', attributes: { 'im:id': '3' } },
    'im:artist': { label: 'Author 3', attributes: { href: 'author3.com' } }
  },
  {
    'im:name': { label: 'Podcast 4' },
    'im:image': [
      { label: 'image10.jpg', attributes: { height: '130' } },
      { label: 'image11.jpg', attributes: { height: '230' } },
      { label: 'image12.jpg', attributes: { height: '330' } }
    ],
    summary: { label: 'Summary of Podcast 4' },
    id: { label: '4', attributes: { 'im:id': '4' } },
    'im:artist': { label: 'Author 4', attributes: { href: 'author4.com' } }
  },
  {
    'im:name': { label: 'Podcast 5' },
    'im:image': [
      { label: 'image13.jpg', attributes: { height: '140' } },
      { label: 'image14.jpg', attributes: { height: '240' } },
      { label: 'image15.jpg', attributes: { height: '340' } }
    ],
    summary: { label: 'Summary of Podcast 5' },
    id: { label: '5', attributes: { 'im:id': '5' } },
    'im:artist': { label: 'Author 5', attributes: { href: 'author5.com' } }
  }
]
