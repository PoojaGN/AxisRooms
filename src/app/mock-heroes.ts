import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, user: 'Ryan Smith', img:'https://randomuser.me/api/portraits/women/16.jpg', messages:[
                {
                    "id": 0,
                    "text": "Hi, Mamatha. How are you?",
                    "created": "Fri, 14 Jul 2017 09:56:37 GMT",
                    "createdBy": 0
                },
                {
                    "id": 0,
                    "text": "Hello, Ryan Smith. I'm Fine",
                    "created": "Fri, 15 Jul 2017 09:56:37 GMT",
                    "createdBy": 12
                }
            ] },
  { id: 12, user: 'Bertha	Keller', img:'https://randomuser.me/api/portraits/women/73.jpg' , messages:[]},
  { id: 13, user: 'Marian	Harris', img:'https://randomuser.me/api/portraits/women/12.jpg', messages:[] },
  { id: 14, user: 'Chester Dixon', img:'https://randomuser.me/api/portraits/women/66.jpg' ,messages:[]}
];
