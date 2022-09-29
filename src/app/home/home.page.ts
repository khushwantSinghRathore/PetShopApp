import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sqare = [
    {
      img: 'assets/card2.png',
      text: 'Free puppy socialisation in store',
      for: 'FREE',
    },
    {
      img: 'assets/card3.png',
      text: 'Eco-friendly toys your dog will love',
      for: 'Shop Green Elk',
    },
    {
      img: 'assets/card4.png',
      text: 'Parasite protection delivered monthly',
      for: 'Shop Green Elk',
    },
  ];

  pets = [
    {
      img: 'assets/dog.png',
      text: 'Dog',
      color: 'rgba(248, 164, 76,0.15)',
    },
    {
      img: 'assets/cat.png',
      text: 'Cat',
      color: 'rgba(83, 177, 117,0.15)',
    },
    {
      img: 'assets/dog.png',
      text: 'Dog',
      color: 'rgba(83, 92, 177,0.15)',
    },
  ];
  constructor() {}
}
