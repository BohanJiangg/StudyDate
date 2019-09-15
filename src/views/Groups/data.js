import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'Wellesley Neuro 100',
    description:'Group for MCB127! We also meet every Weds. 6-8pm in Clapp.',
    imageUrl: '/images/Courses/Neurology.jpg',
    totalDownloads: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: uuid(),
    title: 'CS61B: Data Structures',
    description:
      'Study group for CS61B! Virtual study hangout every Tues.!',
    imageUrl: '/images/courses/data_structures.jpg',
    totalDownloads: '835',
    createdAt: '04/04/2019'
  },
  {
    id: uuid(),
    title: 'Computer Science Mentors',
    description:
      'Sharing tips for computer science mentoring and edumacation!',
    imageUrl: '/images/courses/computer_science_mentors.png',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: uuid(),
    title: 'MCB140: Genetics',
    description:
      'Study group for MCB140. We share flashcards, do study hangouts, and have fun in MCB140 together!',
    imageUrl: '/images/products/genes.jpg',
    totalDownloads: '857',
    createdAt: '03/04/2019'
  },
  {
    id: uuid(),
    title: 'Machine Learning 101',
    description:
      'Study group for Stat120!',
    imageUrl: '/images/products/machine learning.png',
    totalDownloads: '406',
    createdAt: '04/04/2019'
  }
];
