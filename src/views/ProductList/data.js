import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'Dropbox',
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    imageUrl: '/images/products/product_1.png',
    totalDownloads: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'Musical Theatre',
    description:
      'We explore the boundaries, powers, and conversations great musicals having with one another, as long with who creates them.',
    imageUrl: '/images/products/musical theatre.jpg',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'Genetics',
    description:
      'Develop an understanding of the fundamental principles of genetics at the molecular, cellular, organismal and population levels.',
    imageUrl: '/images/products/genes.jpg',
    totalDownloads: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Machine Learning',
    description:
      'Machine learning is the science of teaching computers how to learn from observations. This course covers the theoretical ideas behind widely used algorithms like support vector machines, neural networks, graphical models, decision trees, and many more.',
    imageUrl: '/images/products/machine learning.png',
    totalDownloads: '406',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'Social Computing',
    description:
      'Social Computing systems connect us to our closest friends, and globally to people all over the world. In recent decades, companies like Facebook, Snapchat, and even Amazon, have reshaped our social environments.',
    imageUrl: '/images/products/soc.jpg',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  }
];
