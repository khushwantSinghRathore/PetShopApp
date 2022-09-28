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
  constructor() {}
}
