import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'Sam Brown',
    description:'MIT 2022. CS Major, Musical Theatre minor',
    imageUrl: '/images/products/product_1.jpeg',
    totalDownloads: '3',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Mark Zuk',
    description:
      'MIT 2020. CS Major',
    imageUrl: '/images/products/machine learning.png',
    totalDownloads: '8',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'Jen Howe',
    description:
      'Wellesley 2022. MAS major',
    imageUrl: '/images/products/soc.jpg',
    totalDownloads: '2',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: "Xavier O'Connor",
    description:
      ' ',
    imageUrl: '/images/products/musical theatre.jpg',
    totalDownloads: '5',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Gabriela Garcia',
    description:
      'Wellesley 2022. Linguistics major',
    imageUrl: '/images/products/genes.jpg',
    totalDownloads: '9',
    createdAt: '03/04/2019'
  }
  
];
