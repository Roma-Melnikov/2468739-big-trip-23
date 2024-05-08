import { getRandomElement } from '../utils.js';
import { DESTINATIONS } from '../const.js';

export const events = [
  {
    type: 'taxi',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 1, 0, 0,),
    endEventDate: new Date(2024, 0, 1, 0, 1,),
    price: 100,
    offers: [1],
    isFavorite: true,
  },
  {
    type: 'train',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 2, 1, 0,),
    endEventDate: new Date(2024, 0, 3, 1, 0,),
    price: 200,
    offers: [1, 3],
    isFavorite: true,
  },
  {
    type: 'bus',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 3, 2, 0,),
    endEventDate: new Date(2024, 0, 3, 2, 30,),
    price: 50,
    offers: [3, 5],
    isFavorite: true,
  },
  {
    type: 'ship',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 4, 3, 30,),
    endEventDate: new Date(2024, 0, 5, 4, 40,),
    price: 300,
    offers: [2],
    isFavorite: false,
  },
  {
    type: 'drive',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 6, 9, 50,),
    endEventDate: new Date(2024, 0, 6, 19, 0,),
    price: 170,
    offers: [],
    isFavorite: false,
  },
  {
    type: 'flight',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 7, 9, 15,),
    endEventDate: new Date(2024, 0, 7, 11, 0,),
    price: 500,
    offers: [2],
    isFavorite: true,
  },
  {
    type: 'check-in',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 8, 17, 0,),
    endEventDate: new Date(2024, 0, 8, 17, 15,),
    price: 30,
    offers: [],
    isFavorite: true,
  },
  {
    type: 'sightseeing',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 9, 0, 0,),
    endEventDate: new Date(2024, 0, 10, 0, 0,),
    price: 20,
    offers: [],
    isFavorite: false,
  },
  {
    type: 'restaurant',
    destination: getRandomElement(DESTINATIONS),
    startEventDate: new Date(2024, 0, 11, 20, 0,),
    endEventDate: new Date(2024, 0, 11, 23, 0,),
    price: 70,
    offers: [2, 3],
    isFavorite: true,
  },
];
